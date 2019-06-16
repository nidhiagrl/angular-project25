import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  {path :'customer', component:CustomerComponent},
    {path :'order', component:OrderComponent},
    {path :'about', component:AboutComponent},
    {path :'login', component:LoginComponent},
    {path:'customer/new',component:CustomerFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}