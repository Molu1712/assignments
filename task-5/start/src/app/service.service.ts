import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const endpoint = 'http://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class service {

  constructor(private http:HttpClient) { }

  url : string = "http://localhost:3000/category"
  url1 : string = "http://localhost:3000/category/"

  
   
  getUser(){
    return this.http.get(this.url)
  }
  getUser1(){
    return this.http.get("http://localhost:3000/comments/")
  }
  // getUser1(e:any){
  //   return this.http.get("http://localhost:3000/comments/",e)
  // }

  // delUser(e:any){
  //   return this.http.delete(this.url1+e)
  // }
  edits(e:any){
    return this.http.put(this.url1+e.id,e);
  }

  // update(emp:any,id:any){
  //   return this.http.put(this.url1+id,emp)
  // }

  addnewdata(emp:any){
    return this.http.post("http://localhost:3000/category",emp)
  }
}
