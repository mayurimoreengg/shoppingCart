import { Component } from '@angular/core';
import { CartServiceService } from './service/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoppingCart';

  constructor(public cartService: CartServiceService){}
}
