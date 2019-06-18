import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';
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

@NgModule({
  imports:      [ BrowserModule, FormsModule,FontAwesomeModule,
  AngularFireModule.initializeApp(environment.firebase),
  AppRoutingModule
],
  declarations: [ AppComponent, HelloComponent, BsNavbarComponent, CustomerComponent, OrderComponent, AboutComponent, LoginComponent, CustomerFormComponent, CardComponent, ListComponent, MapComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService,AngularFireDatabase]
})
export class AppModule { }
