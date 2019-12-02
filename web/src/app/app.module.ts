import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SitesComponent } from './sites/sites.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopnavComponent } from './topnav/topnav.component';
const appRoutes: Routes = [
  {
    path: 'sites',
    component: SitesComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'welcome to the machine' }
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: HomeComponent,
    data: { title: 'welcome to the machine' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SitesComponent,
    HeaderComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
