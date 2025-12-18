import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-pipesample',
  standalone: false,
  templateUrl: './pipesample.html',
  styleUrl: './pipesample.css',
})
export class Pipesample {
  product: Product;
  DOB:Date;

  constructor() {
    this.product = new Product(1, 'LP1001Test', 'Test', 1500);
    this.DOB=new Date(1990,5,15);
  }

}


// what is pipe? transform data before displaying it in the view