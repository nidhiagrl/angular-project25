import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   faEdit = faEdit;
   items:any[];
  constructor(private db: AngularFireDatabase) {
       this.db.list('/')
      .valueChanges()
      .subscribe(val => {
        this.items = val;
        console.log(val);
        
      });
  }

  ngOnInit() {
  }

}