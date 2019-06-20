import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  k: string = 'user';
  constructor(private db: AngularFireDatabase) {

  }

  addNode(value: object): void {
    this.db.database.ref('/').on('child_added', (snapshot) => {
      this.k += snapshot.numChildren();
    });
    this.db.database.ref().child(this.k).set(value);
  }

  getNodes(): object[] {
    var t = [];
    var ref = this.db.database.ref("/");
    ref.once("value")
      .then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          t.push(childSnapshot.val());
          // var key = childSnapshot.key;
          // console.log(key);
          // var childData = childSnapshot.val();
          //  console.log(childData);
        });
      });
    //console.log(t);
    return t;
  }


  getNodeDetails(val: string): object {
    var temp = [];
    var childData;
    var ref = this.db.database.ref("/");
    ref.on("value", (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        childData = childSnapshot.val();
        var found = (childData.firstName === val);
        if (found) {
          temp = childSnapshot.exportVal();
        }
        return found;
      });
    });
    return temp;
  }
  getImageURL(gender:string):string{
    let url:string;
     if(gender=='male')
      url=URLs[0];
      else
       url=URLs[1];
       return url;
  }
}
const URLs = [
  'https://raw.githubusercontent.com/nidhiagrl/image/master/profile_male.png',
  'https://raw.githubusercontent.com/nidhiagrl/image/master/profile_female.png'

]