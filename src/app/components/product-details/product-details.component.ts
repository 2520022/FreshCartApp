import { ProductsService } from './../../core/services/products.service';

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
autoplay:true,
autoplayTimeout:1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }










constructor(private _ProductsService:ProductsService){}

private readonly _ActivatedRoute=inject(ActivatedRoute)
private readonly _CartService =inject(CartService);
productId!:string|null
productDetails:Iproduct|null = null;

ngOnInit():void{
this._ActivatedRoute.paramMap.subscribe({
next:(pInfo)=>{console.log(pInfo.get('p_id'))
this.productId=pInfo.get('p_id')}
})

this._ProductsService.getProductDetails(this.productId).subscribe({
next:(res)=>{
  this.productDetails=res.data
  console.log(this.productDetails)

}
,
error:(err)=>{console.log(err)},

})

}
addCartItem(p_id:string){
  this._CartService.addItemToCart(p_id).subscribe({
  next:(res)=>{console.log(res)
  },
  error:(err)=>{console.log(err);
  },})
  }
}
