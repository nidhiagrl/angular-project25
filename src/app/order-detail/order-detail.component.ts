import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  firstName:string;
  item : any;
  
  constructor(private activatedRoute: ActivatedRoute, private custSer :CustomerService) {
       this.firstName = this.activatedRoute.snapshot.paramMap.get('firstName');
    this.item = this.custSer.getNodeDetails(this.firstName);
   }

  ngOnInit() {
  }

}