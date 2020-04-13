import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
