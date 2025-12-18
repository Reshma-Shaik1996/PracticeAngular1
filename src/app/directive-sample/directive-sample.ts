import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-directive-sample',
  standalone: false,
  templateUrl: './directive-sample.html',
  styleUrl: './directive-sample.css',
})
export class DirectiveSample {
  num: number;
  colors: string[];
  products: Product[];
  selectedColor: string = 'red';

  constructor() {
    this.num = 0;

    this.colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
    let p1 = new Product(1, 'LP1001', 'Laptop', 1500);
    let p2 = new Product(2, 'MB2001', 'Mobile', 800);
    let p3 = new Product(3, 'TB3001', 'Tablet', 600);

    this.products = [p1, p2, p3];
  }
  addNewProduct() {
    let newProductId = this.products.length + 1;
    let newProduct = new Product(newProductId, 'PRD' + (1000 + newProductId), 'Product ' + newProductId, 100 * newProductId);
    this.products.push(newProduct);
  }

  removeProduct() {
    if (this.products.length > 0) {
      this.products.pop();
    }
  }
}
