import { Component, OnInit, Input } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return "url("+this.image+")";
  }

}
