import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  search1:any;
  filter1:any;
  
  document = [
    { type: "Technical", work: "Terminal Instructables" },
    { type: "Technical", work: "Installation guides" },
    { type: "Human Resources", work: "Career opportunities" },
    { type: "Financial", work: "Customer onboarding" },
    { type: "Marketing", work: "Outlet branding" },
    { type: "Financial", work: "Accounting procedures" },
    { type: "Human Resources", work: "Training" },
    { type: "Marketing", work: "Printing guidance" },
    { type: "Technical", work: "Technical support" }
  ]

  constructor() {

   }

  ngOnInit(): void {
  }
  All()
  {
    this.filter1=""
  }
  Financial(){
    this.filter1="Financial"
  }
  Technical()
  {
    this.filter1="Technical"
  }
  Marketing()
  {
    this.filter1="Marketing"
  }
  Human()
  {
    this.filter1="Human Resources"
  }
}


