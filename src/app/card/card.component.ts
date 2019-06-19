import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   faEdit = faEdit;
   items:object;
  constructor(private custSer:CustomerService) {
   this.items = this.custSer.getNodes();

  }

  ngOnInit() {
  }

}