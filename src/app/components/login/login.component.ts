import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,  FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
// import { clearInterval } from 'timers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ,NgClass , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
loginSub!:Subscription
intervalId!:any
  loading:boolean=false
resText!:string

constructor(private _FormBuilder:FormBuilder,private _AuthService :AuthService  ,private _Router:Router){}

loginForm:FormGroup=new FormGroup ({
email :new FormControl(null , [Validators.required , Validators.email]),
password :new FormControl(null , [Validators.required , Validators.pattern(/^\w{6,}$/)]) ,
})

loginUser():void{
  if(this.loginForm.valid){
  this.loading=true
  console.log(this.loginForm);
 this.loginSub=  this._AuthService.loginUser(this.loginForm.value).subscribe({
    next :(res)=>{console.log(res)
this.resText=res.message
this.loading=false

sessionStorage.setItem('token',res.token)

this._AuthService.saveDecodedUser()


 this.intervalId= setInterval(()=>{
  this._Router.navigate(['/home'])
}, 2000)    },

        error :(err)=>{console.log(err)
          this.resText=err.error.message
          this.loading=false
                },

        })

 }
else{
  this.loginForm.markAllAsTouched()
}}

ngOnDestroy(): void {
clearInterval(this.intervalId)
this.loginSub?.unsubscribe()
}
}
