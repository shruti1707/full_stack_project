import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {
    name : null,
    addressLine1: null,
    addressLine2: null,
    city: null
  }; 
  cart : any;
  cartSubscription : Subscription;
  userId : string;
  userSubscription : Subscription;

  constructor(private shoppingCartService : ShoppingCartService, private orderService : OrderService, private authService : AuthService,
  private router: Router,private route : ActivatedRoute) {}

  async ngOnInit() {
    let cart$ : any = await (await this.shoppingCartService.getcart()).snapshotChanges();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  
  async placeOrder() {
    let order = {
      userId : this.userId,
      datePlaced: new Date().getTime(),
      shipping : this.shipping,
      items: this.cart.payload.val().items
    };

    this.orderService.storeOrder(order);
    let result = await this.orderService.storeOrder(order);
    this.router.navigate(['/ordersuccess', result.key], {relativeTo: this.route});
    this.shoppingCartService.clearCart();
  }    

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}