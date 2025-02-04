import { Component, inject,  OnInit } from '@angular/core';
import { IBrand } from '../../interfaces/ibrands';
import { BrandsService } from '../../core/services/brands.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.css'
})
export class BrandDetailsComponent implements OnInit  {

// constructor( private _BrandsService:BrandsService){}
// private readonly _ActivatedRoute=inject(ActivatedRoute)
// brandsData!:IBrand[]
// brandDetails:IBrand|null = null;
// brandId!:string|null

// ngOnInit():void{
//   this._ActivatedRoute.paramMap.subscribe({
//   next:(bInfo)=>{console.log(bInfo.get('b__id'))
//   this.brandId=bInfo.get('b__id')}
//   })

//   this._BrandsService.getBrandDetails(this.brandId).subscribe({
//   next:(res)=>{
//     this.brandDetails=res.data
//     console.log(this.brandDetails)

//   }
//   ,
//   error:(err)=>{console.log(err)},

//   })

//   }


}
