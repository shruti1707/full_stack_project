import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$ : any;
  shoppingCartItemCount: number;
  cartKey = [];
  totalPrice: number;

  constructor(private shoppingCartService: ShoppingCartService) { }


  async ngOnInit() {
    this.cart$ = await (await this.shoppingCartService.getcart()).snapshotChanges();
    this.cart$.subscribe(cart => {
      this.cart$ = cart;
      this.cartKey = Object.keys(cart.payload.val().items);
      this.shoppingCartItemCount = 0;
      this.totalPrice = 0;
      for(let productId in cart.payload.val().items) {
        this.shoppingCartItemCount += cart.payload.val().items[productId].quantity;
        this.totalPrice += cart.payload.val().items[productId].product.price * cart.payload.val().items[productId].quantity;
      }
    });
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

}