import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [];
  maxLimit = 0;

  constructor(public cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  addItemToCart(id) {
    this.cartService.addProductToCart(id);
  }

  minusItemToCart(id) {
    this.cartService.deductProductFromCart(id);
  }

  removeItemFromCart(id) {
    this.cartService.removeProductFromCart(id);
  }

  EditNumberOfItems(id, count) {
    this.cartService.EditNumberOfProductsInCart(id, count);
  }

}
