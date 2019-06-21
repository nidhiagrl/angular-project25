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
  item : any;
 faUser= faUser;
 faTags = faTags;
 faList = faList;
 faEdit = faEdit;
 zoom: number = 7;

 
  // initial center position for the map
   lat:number=33.4484;
   lng:number=-112.0740;
  val :LatLngLiteral;
   
  constructor( private activatedRoute: ActivatedRoute, private custSer :CustomerService,
  private mapSer :MapService) {
    this.firstName = this.activatedRoute.snapshot.paramMap.get('firstName');
    this.item = this.custSer.getNodeDetails(this.firstName);
     this.mapSer.getLatLng(this.item).subscribe( ( data: object)=> {
        //console.log(data);
      let x = data["results"];
      let y = x[0];
      let res = y["geometry"];
      let ty = res["location"];
      this.val= ty;
      this.lat = this.val.lat;
      this.lng = this.val.lng;
      // console.log(this.val);
     });

    

     }

  ngOnInit() {
  }

}