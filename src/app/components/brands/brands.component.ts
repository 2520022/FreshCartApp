import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICategory } from '../../core/interfaces/Icategory';
import { BrandsService } from '../../core/services/brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent  implements OnInit , OnDestroy{
  private readonly _BrandsService =inject(BrandsService);

brandsData!:ICategory[]
brandsSub!:Subscription;
  isHidden: boolean=true;
modelImage:string=''
modelTitle:string=''
modelName:string=''
modelSlug:string=''



ngOnInit():void{
this.brandsSub=this._BrandsService.getAllBrands().subscribe({
next:(res)=>{
  this.brandsData=res.data
  console.log(res.data)
}
,
error:(err)=>{console.log(err)},
})
}
ngOnDestroy(): void {
this.brandsSub?.unsubscribe()
}
closeSlide(target:EventTarget | null , img:HTMLImageElement){
if (target == img) {
return;
}else{
this.isHidden=true;
}
}

}



