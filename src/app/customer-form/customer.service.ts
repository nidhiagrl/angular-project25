import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  log() {
    console.log("I am in the customer service");
  }
  constructor() { }

}