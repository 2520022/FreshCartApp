import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  post(arg0: string, arg1: { email: any; }) {
    throw new Error('Method not implemented.');
  }

  decodedInfo:any

  constructor(private _HttpClient: HttpClient) {}

  registerUser(userData: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, userData)
  }


loginUser(userData: object): Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`, userData)
}

// forgetPassword(passwordResetEmail:string){
//  return this._HttpClient.sendpasswordResetEmail(passwordResetEmail).then(()=>{
// window.alert('password reset email sent , check your inbox.');
//  })
// .catch((error)=>{
// window.alert(error);
// }
// );
// }





saveDecodedUser():void{
  if(sessionStorage.getItem('token') != null){
    this.decodedInfo  =jwtDecode(sessionStorage.getItem('token') !)  //  (! -->meaning skip the error)
console.log(this.decodedInfo);

  }
}
}
