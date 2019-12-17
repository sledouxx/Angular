import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:  [ BrowserModule, 
  RouterModule,
  FormsModule,
  RouterModule.forRoot([
    { path: '', component: HomePageComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent }
  ])
  ],

  declarations: [
     AppComponent, 
     HelloComponent, 
     ProductsComponent, TopBarComponent, HomePageComponent, ContactComponent, AboutComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
