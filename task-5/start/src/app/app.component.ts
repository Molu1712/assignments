

import { Component, OnInit } from '@angular/core';
import { service } from './service.service';

declare const L :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  result:any | undefined
  toadd:any = {firstname:"",lastname:"",address:"",city:"",state:""}

 

  page:number=1;
  tablesize:any;

  // page1:number=1;
  // tablesize1:number=1;
  
  // page2:number=1;
  // tablesize2:number=1;
  search1:any;
  filter1:any;
  ad:boolean=true;
  id:any;
  custtoadd:any={firstname:"",lastname:"",address:"",city:"",state:""};
  custdet1:boolean=false;
  editview:boolean=false;
  listview:boolean=false;
  gridview:boolean=true;
  custview:boolean=false;
  editcustomer:boolean=false;
  hide:boolean=false;
  newadd:boolean=false
  custview1:boolean=true;
  custview2:boolean=false;
  custview3:boolean=true;
  custorder:boolean=false;
  custdet:boolean=false;
  added:boolean=false;
  view1:boolean=false;
  filtervalue: any;
  filter:any

  // category = [
  //   { name:"Ted James",firstname:"Ted",lastname:"James",city:"Phoenix",state:"Arizano",list:"View Orders",address:"1234 Anywhere St",order:"$207.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.0131753004!2d-112.40524031940198!3d33.605099092668745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1654493170493!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"Michelle Thompson",firstname:"Michelle",lastname:"Thompson",city:"Encinitas",state:"California",list:"View Orders",address:"345 Cedar Point Ave",order:"$8.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53511.55399382554!2d-117.28925401640386!3d33.04403510824754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0bbee3d632b7%3A0x8cc63ffbb6c0049e!2sEncinitas%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1654493265953!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"zed Bishop",firstname:"zed",lastname:"Bishop",city:"Seattle",state:"washington",list:"View Orders",address:"1822 Long Bay Dr.",order:"$227.97",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.4161671724!2d-122.48214775492677!3d47.6129431829524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sin!4v1654493311993!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"Tina Adams",firstname:"Tina",lastname:"Adams",city:"Chandler",state:"Arizano",list:"View Orders",address:"79455 Pinetop Way",order:"$25.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106732.06512824626!2d-111.93389316816602!3d33.28279786069255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a55595c22b693%3A0x386ce373138cfdf0!2sChandler%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1654493355534!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"Igor Minar",firstname:"Igor",lastname:"Minar",city:"Dallas",state:"Texas",list:"View Orders",address:"576 Crescent Bvld,",order:"$207.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.59998553342!2d-96.87163779954427!3d32.820586546898504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1654493394443!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"Brad Greem",firstname:"Brad",lastname:"Greem",city:"Orlando",state:"Florida",list:"View Orders",address:"9874 Center St.",order:"$207.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.69580836257!2d-81.48275091605161!3d28.481101418738614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1654493424259!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"Misko Hevery",firstname:"Misko",lastname:"Hevery",city:"Carey",state:"North California",list:"View Orders",address:"9874 Center St.",order:"$207.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207181.08114344924!2d-78.97039334984083!3d35.77035528048833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acbd54ff4a8b43%3A0x44568fdb5a444be1!2sCary%2C%20NC%2C%20USA!5e0!3m2!1sen!2sin!4v1654493483046!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"Heedy Wahlin",firstname:"Heedy",lastname:"Wahlin",city:"Anaheim",state:"California",list:"View Orders",address:"9874 Center St.",order:"$207.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106053.13661210817!2d-117.91553240259566!3d33.83397080056584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd6f98055e867%3A0x1ab89ab9a2bb160!2sAnaheim%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1654493524800!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"John Papa",firstname:"John",lastname:"Papa",city:"Orlando",state:"Florida",list:"View Orders",address:"9874 Center St.",order:"$207.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.69580836257!2d-81.48275091605161!3d28.481101418738614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1654493587160!5m2!1sen!2sin",width:"600",height:"450",style:"border:0;",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},
  //   { name:"Tonny Smith",firstname:"Tonny",lastname:"Smith",city:"Atlanta",state:"Georgia",list:"View Orders",address:"9874 Center St.",order:"$207.98",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.74113295684!2d-84.56068909007622!3d33.767633772367304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sin!4v1654491098078!5m2!1sen!2sin", width:"600", height:"450", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"},
  // ]
  title: any;
  category: any;
  

  constructor(private api:service) {
  }
  ngOnInit(): void {
    this.getdata(); 
    
  }
  location:any
  jaya(){
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);
  this.api.getUser1().subscribe((r:any)=>{
    this.location = r
    // console.log(this.location.lat)
    // console.log(this.location.lon)
    // console.log(this.location)
    var size = Object.keys(this.location).length;
    console.log(size)
    
    
    for(let i=0;i<size;i++){
    let marker = L.marker([this.location[i].lat, this.location[i].lon]).addTo(map);
    marker.bindPopup(this.location[i].first+" "+this.location[i].last).openPopup();
    }
  });
  }
  getdata():void{
    this.api.getUser().subscribe((r:any)=>{
    this.category = r
   this.tablesize=r.length 
  })
  }
  onTableDataChange(event:any){
    this.page= event;
    this.getdata();
  }
  onTableDataChange1(event:any){
    this.page= event;
    this.getdata();
  }
  // onTableDataChange2(event:any){
  //   this.page= event;
  //   this.getdata();
  // }
  split(e:any){
    this.custtoadd=e;
    this.editview=true;
    this.gridview=false;
    this.listview=false;
    this.custview1=true;
    this.custview2=false;
    this.newadd=false;
    this.hide=false;
  }
  update() {
    this.api.edits(this.custtoadd).subscribe((r:any)=>{
    this.ngOnInit();
      alert("update successfully");
    });
  }
  add(){
  this.api.addnewdata(this.toadd).subscribe((r:any)=>{
      console.log(r)
      alert("Added Successfully")
    this.getdata();
  });
  }

  grid(){
    this.gridview=true;
    this.listview=false;
    this.custview1=true;
    this.custview2=false;
    this.newadd=false;
    this.hide=true;
    this.editview=false;
    this.custdet1=false;
  }
  list(){
    this.gridview=false;
    this.listview=true;
    this.custview1=true;
    this.custview2=false;
    this.editview=false;
    this.newadd=false;
    this.hide=false;
    this.custdet1=false;
  }
  addcust(){
    this.newadd=true;
    this.gridview=false;
    this.listview=false;
    this.editview=false;
    this.custview1=true;
    this.hide=false;
    this.custview2=false;
    this.custdet1=false;
  }
  map(){
    this.custdet1=true;
    this.gridview=false;
    this.listview=false;
    this.custview1=false;
    this.hide=false;
    this.editview=false;
    this.custview2=true;
    this.newadd=false;
  }
  calc(){
    this.custdet=false;
    this.editview=false;
    this.editcustomer=false;
    this.custorder=true;
    this.custview3=false;
    this.added=false;
    this.hide=false;
    this.custdet1=false;
  }
  cust(){
    this.custview=true;
    this.listview=false;
    this.gridview=false;
    this.custview1=false;
    this.custview2=false;
    this.custdet1=false;
    this.editview=false;
    this.custview3=false;
    this.hide=false;
  }
  edit(){
    this.custview3=false;
    this.editview=false;
    this.custorder=false;
    this.custdet=false;
    this.custdet1=false;
    this.added=false;
  }
  details(){
    this.custview3=false;
    this.editview=false;
    this.added=false;
    this.custdet=true;
    this.custorder=false;
    this.hide=false;
    this.custdet1=false;
  }
  getValues(val:any){
    console.warn(val)
  }
}