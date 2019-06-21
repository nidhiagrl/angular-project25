import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component'
import { OrderDetailComponent } from './order-detail/order-detail.component'
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
      { path:'', redirectTo: 'customer/card',pathMatch: 'full' },
       { path: 'customer',
        component: CustomerComponent,
        children: [
          {path:'', redirectTo:'card' ,pathMatch:'full'},
          { path: 'card', component: CardComponent },
          { path: 'list', component: ListComponent },
		      { path: 'map', component : MapComponent },
		      { path: 'new', component : CustomerFormComponent } 
        ]
    },
    { path:'customer-detail/:firstName', component:CustomerDetailComponent},
    { path:'order-detail/:firstName', component:OrderDetailComponent},
    {path :'order', component:OrderComponent},
    {path :'about', component:AboutComponent},
    {path :'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}