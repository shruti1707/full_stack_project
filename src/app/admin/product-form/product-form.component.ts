import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { CreateproductService } from 'src/app/createproduct.service';
import {take } from 'rxjs/operators';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product$ = {
    title: null, 
    price: null,
    image: null,
    category: null
  };

  id$;

  constructor(private router: Router, private route: ActivatedRoute,  private categorys : CategoryService, private produtc : CreateproductService) {

    this.categories$ = categorys.getcategories().snapshotChanges();


    this.id$ =this.route.snapshot.paramMap.get('id');
    if(this.id$) this.produtc.getid(this.id$).pipe(take(1)).subscribe(p => this.product$=p)

    
    
   }

   save(product){

    if(this.id$) this.produtc.update(this.id$,product)
    else this.produtc.create(product);

    this.router.navigate(['/admin/manageproducts']);

     
  }

  delete(){
    if(confirm('Do you want to delete this item?')){
      this.produtc.delete(this.id$);
      this.router.navigate(['/admin/manageproducts']);

    }
    
  }

  ngOnInit(): void {
  }

}
