import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: object;
  constructor( private custSer:CustomerService ) {
    this.items = this.custSer.getNodes();
  }
  ngOnInit() {
  }


}