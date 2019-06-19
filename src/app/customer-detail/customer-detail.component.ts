import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  faUser,faTags,faList, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  item:string;
 faUser= faUser;
 faTags = faTags;
 faList = faList;
 faEdit = faEdit;
  constructor( private activatedRoute: ActivatedRoute) {
    this.item = this.activatedRoute.snapshot.paramMap.get('firstName');
    console.log(this.item);
   }

  ngOnInit() {
  }

}