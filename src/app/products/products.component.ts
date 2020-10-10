import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { CreateproductService } from '../createproduct.service';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy {
   product$ : any[] =[];
   categorie$;
   filteredproducts : any[] =[];
   category$;
   cart: any;
   subscription : Subscription;

   constructor(private route : ActivatedRoute , product : CreateproductService , category : CategoryService , private cartservice : ShoppingCartService){
      product.get().snapshotChanges().subscribe(p => {
        
        this.product$ = p;

        route.queryParamMap.subscribe(p =>{
        this.category$ = p.get('category');

        this.filteredproducts = (this.category$)? this.product$.filter(p => p.payload.val().category === this.category$) : this.product$;
      
      });

    });

      category.getcategories().snapshotChanges().subscribe(c => this.categorie$ =c );

      
   }

    addtocart(produc){
      this.cartservice.addtocart(produc);
      
    }

    removeFromCart(produc) {
      this.cartservice.removeFromCart(produc);
    }
  
    getQuantity(produc) {
      console.log(this.cart);
      if (!this.cart) return 0;
      
      let item = this.cart.payload.val().items[produc.key];
      return item ? item.quantity : 0;
    }






    async ngOnInit() {
      this.subscription =  (await (await this.cartservice.getcart()).snapshotChanges()).subscribe(cart => this.cart = cart);
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

  

  

}
