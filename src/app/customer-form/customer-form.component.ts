import { Component,Input, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  
})
export class CustomerFormComponent implements OnInit {
model: any = {};

  constructor(private cust: CustomerService) {
    }

addCust(){
    this.cust.addNode(this.model);
  
}

  ngOnInit() {
    
  }

}