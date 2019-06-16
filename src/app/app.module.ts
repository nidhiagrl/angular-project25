import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CustomerService } from './customer-form/customer.service';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';

const firebaseConfig = {
    apiKey: "AIzaSyCIemuwK1j2jFbVzSFVk-3v0xH_5Hbe7nE",
    authDomain: "angular-stack-demo.firebaseapp.com",
    databaseURL: "https://angular-stack-demo.firebaseio.com",
    projectId: "angular-stack-demo",
    storageBucket: "angular-stack-demo.appspot.com",
    messagingSenderId: "213760179206",
    appId: "1:213760179206:web:6f01998eb073b048"
  };
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  AppRoutingModule
],
  declarations: [ AppComponent, HelloComponent, BsNavbarComponent, CustomerComponent, OrderComponent, AboutComponent, LoginComponent, CustomerFormComponent, CardComponent, ListComponent, MapComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService]
})
export class AppModule { }
