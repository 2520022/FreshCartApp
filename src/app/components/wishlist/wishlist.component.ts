
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { Subscription } from 'rxjs';
import { IWishlist } from '../../core/interfaces/iWishlist';
import { CartService } from '../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit , OnDestroy  {

private readonly _WishlistService=inject(WishlistService);
private readonly _CartService=inject(CartService);

getCartSub!:Subscription
getWishSub!:Subscription
wishlistData!:IWishlist[]

addFavItem(p_id:string):void{
  this._CartService.addItemToCart(p_id).subscribe({
    next:(res)=>{console.log(res)

      },
  })
  }

ngOnInit(): void {
  this.getWishSub = this._WishlistService.getLoggedUserWishList().subscribe({
    next:(res)=>{console.log(res.data)
      this.wishlistData = res.data
      },

})
}
ngOnDestroy(): void {
this.getWishSub?.unsubscribe()
this.getCartSub?.unsubscribe()
}


// removeFavItem(p_id:string):void{
  //   this._WishlistService.removeItemFromWishlist(p_id).subscribe({
  //     next:(res)=>{console.log(res)
  //   this.wishlistDataData=res.data
  //   // this._WishlistService.cartCount.next(res.numOfCartItems)
  //     },
  //     error:(err)=>{console.log(err);
  //     },})
  //     }

  addCartItem(p_id:string){
    this._CartService.addItemToCart(p_id).subscribe({
    next:(res)=>{console.log(res)
    },
    error:(err)=>{console.log(err);
    },})
    }

    removeFavItem(p_id:string):void{
      this._WishlistService.removeItemFromWishlist(p_id).subscribe({
        next:(res)=>{console.log(res)
      this.wishlistData=res.data
      this._WishlistService.wishCount.next(res.numOfWishItems)
        },
        error:(err)=>{console.log(err);
    },})
        }



}
