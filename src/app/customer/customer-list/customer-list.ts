import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  
  @Input('customers')
  customers: string [] = [];

  constructor(){

    this.customers = [];
  }

}
