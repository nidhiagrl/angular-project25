import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import {  faUser,faTags,faList, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  firstName:string;
  item;
 faUser= faUser;
 faTags = faTags;
 faList = faList;
 faEdit = faEdit;
  constructor( private activatedRoute: ActivatedRoute, private custSer :CustomerService) {
    this.firstName = this.activatedRoute.snapshot.paramMap.get('firstName');
    this.item = this.custSer.getNodeDetails(this.firstName);
    //console.log("Here"+this.item);
     }

  ngOnInit() {
  }

}