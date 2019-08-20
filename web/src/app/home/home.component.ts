import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  val title: string = 'title text'; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( d => this.title = d.title );
  }

}
