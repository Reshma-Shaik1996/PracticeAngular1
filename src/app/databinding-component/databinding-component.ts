import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-component',
  standalone: false,
  templateUrl: './databinding-component.html',
  styleUrl: './databinding-component.css',
})
export class DatabindingComponent {
  productName: string = 'Laptop';
  productCode: string = 'LP1001';

  onShowAlert() {
    alert(`Product Name: ${this.productName}`);
  }
}
