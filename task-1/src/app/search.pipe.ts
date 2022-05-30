import { Pipe, PipeTransform } from '@angular/core'; 
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,search1 : any) {
    let results:any = []
    let temp
    if(!search1)
        return value
    if(value && value.length){
        value.forEach((v:any)=>{
            temp = v['work'].toUpperCase();
            search1 = search1.toUpperCase();
            if(temp.includes(search1))
                results.push(v);
        })
        return results;
    }
}}