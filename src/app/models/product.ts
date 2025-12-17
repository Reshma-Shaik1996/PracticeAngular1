export class Product {
    productId: number;
    productcode: string;
    productName: string;
    price: number;

    // you can have multiple declarations of constructor but only one implementation
    constructor();

    constructor(productId: number, productcode: string, productName: string, price: number);

    constructor(productId?: number, productcode?: string, productName?: string, price?: number) {   
            this.productId = productId ?? 0;
            this.productcode = productcode ?? '';
            this.productName = productName ?? '';
            this.price = price ?? 0;      
    };
}
