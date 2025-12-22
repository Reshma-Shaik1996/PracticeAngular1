import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-addcustomer',
  standalone: false,
  templateUrl: './addcustomer.html',
  styleUrls: ['./addcustomer.css'],
})


export class Addcustomer {
  customerName: string| undefined;
  

  customerList: string[] = [];




  constructor(){
    this.customerList = [];
  }

  addCustomer() {
    if (this.customerName && this.customerName.trim() !== '') {
      this.customerList.push(this.customerName.trim());
      this.customerName = '';
    }
  }

}
