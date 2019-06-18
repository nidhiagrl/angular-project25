import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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