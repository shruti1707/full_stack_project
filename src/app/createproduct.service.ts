import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CreateproductService {

  constructor(private db : AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  get(){
    return this.db.list('/products');
  }

  getid(productid) : any {
    return this.db.object('/products/' + productid).snapshotChanges();
  }

  update(productid , product){
    return this.db.object('/products/' + productid).update(product);
  }

  delete(productid){
    return this.db.object('/products/' + productid).remove();
  }
}
