import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

k:string ='user';
  constructor(private db: AngularFireDatabase) { }
   addNode(value: object): void {
     this.db.database.ref('/').on('child_added',(snapshot)=>{
        this.k+=snapshot.numChildren();
     });
     this.db.database.ref().child(this.k).set(value);
   }  
   
}