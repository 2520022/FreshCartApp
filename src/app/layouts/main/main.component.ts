import { Component } from '@angular/core';
import { BrandsComponent } from "../../components/brands/brands.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { CartComponent } from "../../components/cart/cart.component";
import { ProductsComponent } from "../../components/products/products.component";
import { HomeComponent } from "../../components/home/home.component";
import { NavMainComponent } from "../../components/nav-main/nav-main.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, NavMainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
