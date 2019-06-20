import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: any;
  
  constructor( private custSer:CustomerService ) {
    this.items = this.custSer.getNodes();

    // console.log(this.items);
    //   this.items.forEach((user)=>console.log(user.key,user.val()));
    // this.items.forEach(function (childSnapshot) {
    //       t.push(childSnapshot.exportVal());
    //       var key = childSnapshot.key;
    //       // console.log(key);
    //       var childData = childSnapshot.val();
    //       //  console.log(childData);
    //     });
  }
  ngOnInit() {
  }
 
}
