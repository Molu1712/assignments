import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchpipePipe implements PipeTransform {

 
  transform(value: any,filtervalue : any) {
    let results:any = []
    let temp
    if(!filtervalue)
        return value
    if(value && value.length){
        value.forEach((v:any)=>{
            temp = v['firstname'].toUpperCase();
            filtervalue = filtervalue.toUpperCase();
            if(temp.includes(filtervalue))
                results.push(v);
        })
        return results;
    }
}
}

