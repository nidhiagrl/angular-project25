import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],

})


export class CustomerFormComponent implements OnInit {
  model: any = {};
  firstName: string;
  update: boolean;
  path: string;
  key: string;


  constructor(private activatedRoute: ActivatedRoute, private cust: CustomerService) {
    this.path = this.activatedRoute.snapshot.routeConfig.path;

    this.firstName = this.activatedRoute.snapshot.paramMap.get('firstName');
    this.model = this.cust.getNodeDetails(this.firstName);
    //console.log(this.model);
    if (this.path == 'new')
      this.update = false;
    else {
    this.update = true;
      this.key = this.cust.getNodeKey(this.firstName);
      //console.log(this.key);
    }
  }

  editCust() {
    this.cust.updateCust(this.key, this.model);
    alert("Details updated");
  }

  addCust() {
    this.cust.addNode(this.model);
    alert("Customer created");
  }

  ngOnInit() {

  }

}