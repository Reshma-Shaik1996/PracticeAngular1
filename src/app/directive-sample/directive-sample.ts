import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

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

  Id: string| undefined;
  City: string| undefined;
  Country: string| undefined;

//Inject ActivatedRoute to read route parameters
  constructor(activatedRoute: ActivatedRoute) {
    this.num = 0;

    this.colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
    let p1 = new Product(1, 'LP1001', 'Laptop', 1500);
    let p2 = new Product(2, 'MB2001', 'Mobile', 800);
    let p3 = new Product(3, 'TB3001', 'Tablet', 600);

    this.products = [p1, p2, p3];

    activatedRoute.params.subscribe
    (params=>{
      this.Id=params['id'];
    });

    activatedRoute.queryParams.subscribe(
      queryParams=>{
        this.City=queryParams['city'];
        this.Country=queryParams['country'];
      }
    );
    
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
