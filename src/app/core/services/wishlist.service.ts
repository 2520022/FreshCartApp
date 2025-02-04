import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  private readonly _HttpClient=inject(HttpClient)
wishCount:BehaviorSubject<number> = new BehaviorSubject(0)

getLoggedUserWishList():Observable<any>{
return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist` )
}

addItemToWishlist(p_id:string):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist`, { "productId": p_id } );
}
removeItemFromWishlist(p_id:string):Observable<any>{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${p_id}` )
  }


}

