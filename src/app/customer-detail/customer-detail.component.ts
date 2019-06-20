import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { MapService } from '../map.service';
import {  faUser,faTags,faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import { LatLngLiteral } from '@agm/core';

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
 zoom: number = 7;
 
  // initial center position for the map
   lat:number=33.4484;
   lng:number=-112.0740;
  val :LatLngLiteral;
   
  // bounds: LatLngLiteral[]=[
  //   { lat: 33.4484, lng: -112.0740 },//Phoenix,Arizona 
  //   { lat: 33.0370, lng: -117.2920 },//Encinitas,California
  //   { lat: 47.6062, lng: -122.3321 },//Seattle,Washington
  //   { lat: 33.3062, lng: -111.8413 },//Chandler,Arizona
  //   { lat: 32.7767, lng:-96.7970 },//Dallas,Texas
  //   { lat: 28.5383, lng: -81.3792 }//Orlando,Florida
    
    
  // ];
  constructor( private activatedRoute: ActivatedRoute, private custSer :CustomerService,
  private mapSer :MapService) {
    this.firstName = this.activatedRoute.snapshot.paramMap.get('firstName');
    this.item = this.custSer.getNodeDetails(this.firstName);
    this.val = this.mapSer.getLatLng(this.item);
    //console.log("Here"+this.item);
     }

  ngOnInit() {
  }

}