import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, orderBy:any): any {
    value.sort((a,b)=>{
      if(a[orderBy] < b[orderBy]){
        return -1;
      }else if(a[orderBy]> b[orderBy]){
        return 1;
      }else{
        return 0;
      }
    })
    return value;
  }

}