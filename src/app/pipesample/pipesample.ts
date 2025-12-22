import { Component, Inject } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipesample',
  standalone: false,
  templateUrl: './pipesample.html',
  styleUrl: './pipesample.css',
})
export class Pipesample {
  product: Product;
  DOB:Date;

  //how do I inject Router service here to navigate programmatically. like this constructor(@Inject(Router) private router: Router) {} 
  constructor(private router: Router) {
    this.product = new Product(1, 'LP1001Test', 'Test', 1500);
    this.DOB=new Date(1990,5,15);
  }

  redirect(){
this.router.navigate(['dir', this.product.productId], {queryParams:{city:'NewYork', country:'USA'}});
  }
}


// what is pipe? transform data before displaying it in the view