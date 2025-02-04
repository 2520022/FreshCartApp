import { RouterLink } from '@angular/router';
import { CategoriesService } from './../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ICategory } from '../../core/interfaces/Icategory';
import { SlicePipe, UpperCasePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ UpperCasePipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit , OnDestroy{

  categoriesData!:ICategory[]
categorySub!:Subscription;


private readonly _CategoriesService =inject(CategoriesService);
private readonly _NgxSpinnerService =inject(NgxSpinnerService);


ngOnInit():void{
  this._NgxSpinnerService.show()
this.categorySub=this._CategoriesService.getAllCategories().subscribe({
next:(res)=>{

  this._NgxSpinnerService.hide()

  this.categoriesData=res.data
  console.log(res.data)
}
,

error:(err)=>{console.log(err)},
})
}
ngOnDestroy(): void {
this.categorySub?.unsubscribe()
}


}
