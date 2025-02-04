import { AllordersComponent } from './components/allorders/allorders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandsComponent } from './components/brands/brands.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './core/guards/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [
{path:'' , component:AuthComponent, children:[
{path : '' , redirectTo:'login' , pathMatch: 'full'},
{path :'login' , component:LoginComponent , title:'Login'},
{path :'register' , component:RegisterComponent , title: 'Register'},
{path :'forgot-password' , component:ForgotPasswordComponent , title: 'Forget-password'},
]},
{path:'' , component:MainComponent ,canActivate:[authGuard], children :[
  {path : '' , redirectTo:'home' , pathMatch: 'full'},
{path : 'home' , component:HomeComponent , title :'Home'   },
{path : 'products' , component:ProductsComponent , title :'Products'},
{path : 'cart' , component:CartComponent , title :'Cart'},
{path : 'wishlist' , component:WishlistComponent , title :'Wishlist'},
{path : 'allorders' , component:AllordersComponent, title:'Allorders'},
{path : 'categories' , component:CategoriesComponent , title :'Categories'},
{path : 'brands' , component:BrandsComponent , title:'Brands'},
{path : 'productDetails/:p_id' , component:ProductDetailsComponent , title:'Details'},

{path : 'checkout/:cart_id' , component:CheckoutComponent , title:'Check-out'},

]},
{path : '**' , component:NotFoundComponent , title:'ERROR 404'}



];
