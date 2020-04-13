import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './../service/product-service.service';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products;

  constructor(public productService: ProductServiceService, public cartService: CartServiceService) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  EditNumberOfItems(id, count) {
    if(count !== 0) {
      this.cartService.EditNumberOfProductsInCart(id, count);
    }
  }

}
