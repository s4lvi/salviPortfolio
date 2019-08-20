import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  sites: Site[] = [{
    name: "site1",
    description: "a site",
    img_url: "https://cdn.dribbble.com/users/476251/screenshots/2619255/attachments/523315/placeholder.png",
    techs: ["html", "css", "angular"]
  }];

  constructor() { }

  ngOnInit() {
  }

}

interface Site {
  name: string;
  description: string;
  img_url: string;
  techs: string[];
}
