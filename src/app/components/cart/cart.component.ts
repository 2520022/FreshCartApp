import { RouterLink } from '@angular/router';

import { CartService } from './../../core/services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Icart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { count } from 'console';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  , OnDestroy{


constructor(private _CartService:CartService){}

getCartSub!:Subscription
cartData:Icart | null= null


ngOnInit(): void {
this.getCartSub = this._CartService.getLoggedUserCart().subscribe({
next:(res)=>{console.log(res.data)
this.cartData = res.data
},
error:(err)=>{console.log(err)},
})
}

ngOnDestroy(): void {
this.getCartSub?.unsubscribe()


}
removeItem(p_id:string):void{
this._CartService.removeItemFromCart(p_id).subscribe({
  next:(res)=>{console.log(res)
this.cartData=res.data
this._CartService.cartCount.next(res.numOfCartItems)
  },
  error:(err)=>{console.log(err);
  },})
  }

updateQuant(p_id:string , count:number):void{
if(count>0){
  this._CartService.updateItemQuant(p_id , count).subscribe({
    next:(res)=>{console.log(res)
  this.cartData=res.data
    },
    error:(err)=>{console.log(err);
    },})
}
}

deleteCart():void{
this._CartService.removeAllCart().subscribe({
next:(res)=>{console.log(res)
  this.cartData=res.numOfCartItems
  this.cartData = res.data
}
})
}
}

