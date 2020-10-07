import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateproductService } from 'src/app/createproduct.service';
import { PRODUCT } from 'src/app/models/product';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit , OnDestroy {

  products : any[];
  filteredproducts : any[];
  subs : Subscription;

  constructor(private cc : CreateproductService) {

    this.subs = this.cc.get().snapshotChanges().subscribe(p => this.filteredproducts = this.products = p);

   }

   filter(query : string){
     this.filteredproducts = query ? this.products.filter(p => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) : this.products;
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subs.unsubscribe();

  }

}
