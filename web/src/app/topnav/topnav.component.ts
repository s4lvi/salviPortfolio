import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  scrollTo(link: string) {
    var element=document.querySelector(link); 
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
