import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AgmCoreModule } from '@agm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CustomerService } from './customer.service';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MapService } from './map.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,FontAwesomeModule,
  AngularFireModule.initializeApp(environment.firebase),
  AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC25O08KtX56PXgfECm-LJ26_Jz5HSqc7Q'
    }),
  AppRoutingModule,HttpClientModule
],
  declarations: [ AppComponent, HelloComponent, BsNavbarComponent, CustomerComponent, OrderComponent, AboutComponent, LoginComponent, CustomerFormComponent, CardComponent, ListComponent, MapComponent, CustomerDetailComponent, OrderDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService,AngularFireDatabase, MapService]
})
export class AppModule { }
