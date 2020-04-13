import { Injectable } from '@angular/core';
import products from './../../input.json';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = products;

  constructor() { }

  getInputProductsAndSave(){

  }

  getAllProducts(){
    return this.products;
  } 
}
