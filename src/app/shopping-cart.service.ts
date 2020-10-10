import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take  } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db : AngularFireDatabase) { }

   private create(){
     return this.db.list('/shopping-carts').push({
     DateCreated : new Date().getTime()
  });
  }


async getcart() {
  let cartId = await this.getorcreatecart();
  return this.db.object('/shopping-carts/' + cartId);
}

  private async getorcreatecart(){
    let cartId = localStorage.getItem('cartId');


      if(cartId) return cartId;
      let result = await this.create();
       
      localStorage.setItem('cartId' , result.key);
      
      return result.key;
      
}

async removeFromCart(product) {
  this.updateItemQuantity(product, -1);
}

async clearCart() {
  let cartId = await this.getorcreatecart();
  this.db.object('/shopping-carts/' + cartId + '/items').remove();
}



  async addtocart(product){
     this.updateItemQuantity(product, 1);
  }

  private getItem(cartId : string, productId : string) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId)
      }

private async updateItemQuantity(product, change: number) {
  let cartId = await this.getorcreatecart();
  let item$ : any = this.getItem(cartId, product.key).snapshotChanges();
  let item$$ = this.getItem(cartId, product.key);

  item$.pipe(take(1)).subscribe(item => {
    if (item.payload.val()) {
      if(!(item.payload.val().quantity + change)) {
        (item$$).update({quantity: item.payload.val().quantity + change});
        item$$.remove();
      }
      else
        (item$$).update({quantity: item.payload.val().quantity + change});
  }
    else (item$$).set({product: product.payload.val(), quantity: 1});
  });
}
}



