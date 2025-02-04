import { Brand } from './../../core/interfaces/iproduct';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategory } from '../../core/interfaces/Icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import {  RouterLink } from '@angular/router';
import { LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
// import { BrandsService } from '../../services/brands.service';
import { IBrand } from '../../interfaces/ibrands';
import { BrandsService } from '../../core/services/brands.service';
import { WishlistService } from '../../core/services/wishlist.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule , RouterLink , UpperCasePipe , SearchPipe , FormsModule , SlicePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit , OnDestroy{

private readonly _ProductsService =inject(ProductsService);
private readonly _CategoriesService =inject(CategoriesService);
private readonly _CartService =inject(CartService);
private readonly _WishlistService =inject(WishlistService);
private readonly _BrandsService =inject(BrandsService);
private readonly _ToastrService =inject(ToastrService);
private readonly _NgxSpinnerService =inject(NgxSpinnerService);


productsData!:Iproduct[]
categoryData!:ICategory[]
brandsData!:IBrand[]
productSub!:Subscription;
categorySub!:Subscription;
getWishSub!:Subscription
brandsSub!:Subscription;
searchInputValue:string=''

categoriesSlider: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: true,
autoplayTimeout:2000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['pre', 'next'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
     1100: {
        items:6
      }
    },
    nav: true
  }
mainSlider: OwlOptions = {

    loop: true,
    mouseDrag: true,
    touchDrag: true,
autoplayTimeout:2000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['pre', 'next'],
items:1,
    nav: true
  }



ngOnInit(): void {
//show loading screen
this._NgxSpinnerService.show()
 this.productSub = this._ProductsService.getAllProducts().subscribe({
next:( res)=>{
//hide loading screen
this._NgxSpinnerService.hide()
  console.log(res.data.slice(0,20))
this.productsData=res.data.slice(0,20)
}
})
this.categorySub=this._CategoriesService.getAllCategories().subscribe({
next:(res)=>{
  // console.log(res.data);
  this._NgxSpinnerService.hide()
this.categoryData=res.data

}
})


this.brandsSub = this._BrandsService.getAllBrands().subscribe({
  next:(res)=>{
    console.log(res.data);
    this._NgxSpinnerService.hide()
  this.brandsData=res.data

  }
  })



  }







ngOnDestroy(): void {
this.categorySub?.unsubscribe()
this.productSub?.unsubscribe()
this.brandsSub?.unsubscribe()
this.getWishSub?.unsubscribe()
}

addCartItem(p_id:string){
this._CartService.addItemToCart(p_id).subscribe({
next:(res)=>{console.log(res)
this._CartService.cartCount.next(res.numOfCartItems)
console.log(this._CartService.cartCount);

this._ToastrService.success(res.message , 'freshCart' , {timeOut:2000 , closeButton:true})
},
error:(err)=>{console.log(err)
  this._ToastrService.error(err.message , 'freshCart' , {timeOut:2000 , closeButton:true})

},})
}
addWishlistItem(p_id:string){
this._WishlistService.addItemToWishlist(p_id).subscribe({
  next:(res)=>{console.log(res);
},})
}






}




