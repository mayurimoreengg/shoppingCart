import { Injectable } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartItems = [];
  totalPrice = 0;

  constructor(public productsService: ProductServiceService) { 
    this.cartItems = productsService.getAllProducts();
    this.cartItems.map((item) => {
      item.count = 0;
      item.totalPrice = 0;
    });
  }

  calculateTotalCartPrice() {
    this.totalPrice = 0;
    for(var i in this.cartItems) {
      if (this.cartItems[i].count > 0) {
        this.totalPrice = this.totalPrice + this.cartItems[i].totalPrice;
     }
    }
    console.log(this.totalPrice);
  }

  getCartItems() {
    return this.cartItems;
  }

  addProductToCart(productId){
    for(var i in this.cartItems) {
      if (this.cartItems[i].productId == productId) {
        if(this.cartItems[i].count < parseInt(this.cartItems[i].stock)) {
          this.cartItems[i].count++;
          this.cartItems[i].totalPrice = this.cartItems[i].price * this.cartItems[i].count;
        }
        break; //Stop this loop, we found it!
     }
    }
    this.calculateTotalCartPrice();
  }

  deductProductFromCart(productId) {
    for(var i in this.cartItems) {
      if (this.cartItems[i].productId == productId) {
        this.cartItems[i].count--;
        this.cartItems[i].totalPrice = this.cartItems[i].price * this.cartItems[i].count;
        break; //Stop this loop, we found it!
     }
    }
    this.calculateTotalCartPrice();
  }

  removeProductFromCart(productId){
    for(var i in this.cartItems) {
      if (this.cartItems[i].productId == productId) {
        this.cartItems[i].count = 0;
        this.cartItems[i].totalPrice = 0;
        break; //Stop this loop, we found it!
     }
    }
    this.calculateTotalCartPrice();
  }

  EditNumberOfProductsInCart(productId, count){
    for(var i in this.cartItems) {
      if (this.cartItems[i].productId == productId) {
        if(count <= parseInt(this.cartItems[i].stock)) {
          this.cartItems[i].count = count;
          this.cartItems[i].totalPrice = this.cartItems[i].price * this.cartItems[i].count;
        } else {
          this.cartItems[i].count = 1;
          this.cartItems[i].totalPrice = this.cartItems[i].price;
        }
        break; //Stop this loop, we found it!
     }
    }
    this.calculateTotalCartPrice();
  }


}
