import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }
  // clientToken:any ={token :sessionStorage.getItem('token')}

checkoutSession(cartId:string|null ,shipingData:object):Observable<any>{
return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${environment.url}` ,
{
"shippingAddress":shipingData
}
)
}

}
