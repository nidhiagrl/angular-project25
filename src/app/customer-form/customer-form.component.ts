import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  providers: [CustomerService]
})
export class CustomerFormComponent implements OnInit {

  constructor(private cust:CustomerService) { }

createIt(){
  this.cust.log();
}
  ngOnInit() {
  }

}