import { Subscription } from 'rxjs';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { SearchPipe } from "../../core/pipes/search.pipe";
import { SlicePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../../core/services/wishlist.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SearchPipe , UpperCasePipe , SlicePipe , RouterLink , FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit , OnDestroy {
constructor(private _ProductsService:ProductsService){}


searchInputValue:string=''
productsData!:Iproduct[]
productSub!:Subscription;

private readonly _ActivatedRoute=inject(ActivatedRoute)
private readonly _CartService =inject(CartService);
private readonly _WishlistService =inject(WishlistService);


ngOnInit():void{
this.productSub=this._ProductsService.getAllProducts().subscribe({
next:(res)=>{
  this.productsData=res.data
  console.log(res.data)
}



,
error:(err)=>{console.log(err)},

})

}
ngOnDestroy(): void {
this.productSub?.unsubscribe()
}



addCartItem(p_id:string){
  this._CartService.addItemToCart(p_id).subscribe({
  next:(res)=>{console.log(res)
  },
  error:(err)=>{console.log(err);
  },})
  }
  addWishlistItem(p_id:string){
    this._WishlistService.addItemToWishlist(p_id).subscribe({
      next:(res)=>{console.log(res);
    },})
    }

}




