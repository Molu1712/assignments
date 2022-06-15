import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calci'; 
  value:any=0;
display(num:any)
{
  if(this.value == '0')
  {
    this.value=''
  }
  this.value += num;
}
calculate(){
    try{
      this.value = eval(this.value);
    }
    catch{
        alert("invalid");
    }
}
Clear(){
    this.value="0";
}
}