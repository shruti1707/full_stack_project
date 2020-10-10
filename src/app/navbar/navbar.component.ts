import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  appuser : AppUser;
  shoppingCartItemCount : number;

  

  constructor(private auth : AuthService , private shoppingCartService : ShoppingCartService)  {

    auth.appuser$.subscribe(appsuer => this.appuser=appsuer)
  }

  logout(){
    this.auth.logout();
  }

  async ngOnInit(){
    this.auth.appuser$.subscribe(appUser => this.appuser = appUser);
    let cart$ : any = await (await this.shoppingCartService.getcart()).snapshotChanges();
    cart$.subscribe(cart => {
      this.shoppingCartItemCount = 0;
      for(let productId in cart.payload.val().items)
        this.shoppingCartItemCount += cart.payload.val().items[productId].quantity;
    });


  

}
}
