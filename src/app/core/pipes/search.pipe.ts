import { Pipe, PipeTransform } from '@angular/core';
import { title } from 'process';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform( data:any[ ] , searchKey:string): any[] {
    return data.filter ((current)=>{ return current.title.includes(searchKey.toLowerCase())});
  }

}
