import { Component, OnInit } from '@angular/core';
import { faAlignJustify, faMapMarkerAlt, faPlus, faThLarge, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   faMenu =faAlignJustify;
   faMap = faMapMarkerAlt;
   faPlus = faPlus;
   faSquare = faThLarge;
   faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}