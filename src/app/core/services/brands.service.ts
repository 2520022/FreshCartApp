import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }
getAllBrands():Observable<any>{
return this._HttpClient.get(`${environment.baseUrl}/api/v1/brands`)

}
getBrandDetails(id:string|null):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/brands/${id}`)
  }
}
