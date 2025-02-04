import { Subscription } from 'rxjs';
import { CartService } from './../../core/services/cart.service';
import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [RouterLinkActive , RouterLink],
  templateUrl: './nav-main.component.html',
  styleUrl: './nav-main.component.css'
})
export class NavMainComponent implements OnInit  , OnDestroy {

private readonly _CartService=inject(CartService)
constructor( private _Router:Router){}

subID!:Subscription

Counter:number=0
ngOnInit():void{

this._CartService.getLoggedUserCart().subscribe({
next:(res)=>{
this.Counter=res.numOfCartItems
}
})


this._CartService.cartCount.subscribe({

next:(value)=>{console.log(value)
  this.Counter=value
}
})
}

logout():void{
sessionStorage.removeItem('token')
this._Router.navigate(['login'])
}
ngOnDestroy():void{
this.subID?.unsubscribe()
}
}
