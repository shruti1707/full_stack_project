import { Component, OnInit } from '@angular/core';
import { CreateproductService } from 'src/app/createproduct.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit {

  products$;

  constructor(private cc : CreateproductService) {

    this.products$= cc.get().snapshotChanges();

   }

  ngOnInit(): void {
  }

}
