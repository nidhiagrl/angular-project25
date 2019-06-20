import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  
})


export class CustomerFormComponent implements OnInit {
model: any = {};
@ViewChild('f') form: any;

  constructor(private cust: CustomerService) {
    }

addCust(){
    this.cust.addNode(this.model);
    alert("Customer created");
    this.form.reset();
}

  ngOnInit() {
    
  }

}