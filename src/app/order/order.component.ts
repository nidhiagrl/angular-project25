import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items:any;
  constructor(private custSer:CustomerService) {
     this.items = this.custSer.getNodes();
   }

  ngOnInit() {
  }

}