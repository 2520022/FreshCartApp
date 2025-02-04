import { environment } from './../environments/environments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _HttpClient=inject(HttpClient)

  cartCount:BehaviorSubject<number> = new BehaviorSubject(0)

// clientToken:any ={token :sessionStorage.getItem('token')}

constructor() { }



getLoggedUserCart():Observable<any>{
return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart` )
}

addItemToCart(p_id:string):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`, { "productId": p_id } );
}

removeItemFromCart(p_id:string):Observable<any>{
return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${p_id}` )
}
updateItemQuant(p_id:string , count: number):Observable<any>{
return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${p_id}` ,{ "count" : count } )
}

removeAllCart():Observable<any>{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart` )
  }
}
