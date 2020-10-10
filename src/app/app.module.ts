import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { ManageproductsComponent } from './admin/manageproducts/manageproducts.component';
import { ManageordersComponent } from './admin/manageorders/manageorders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AuthService } from './auth.service';
import { AuthguardComponent } from './authguard/authguard.component';
import { AuthguardService } from './authguard.service';
import { UserserviceService } from './userservice.service';
import { AdminauthguardService } from './adminauthguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { CreateproductService } from './createproduct.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ShoppingCartService } from './shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CartComponent,
    CheckoutComponent,
    OrdersuccessComponent,
    ManageproductsComponent,
    ManageordersComponent,
    MyOrdersComponent,
    LoginpageComponent,
    AuthguardComponent,
    ProductFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([

      { path : '' , component : HomepageComponent },
      { path : 'cart' , component : CartComponent},
      { path : 'loginpage' , component : LoginpageComponent },


      { path : 'checkout' , component : CheckoutComponent , canActivate : [AuthguardService] },
      { path : 'ordersuccess' , component : OrdersuccessComponent , canActivate : [AuthguardService] },
      { path : 'my-orders' , component : MyOrdersComponent , canActivate : [AuthguardService] },

      { path : 'admin/manageproducts' , component : ManageproductsComponent , canActivate : [AuthguardService, AdminauthguardService] },
      { path : 'admin/manageproducts/new' , component : ProductFormComponent , canActivate : [AuthguardService, AdminauthguardService] },
      { path : 'admin/manageproducts/:id' , component : ProductFormComponent , canActivate : [AuthguardService, AdminauthguardService] },
      { path : 'admin/manageorders' , component : ManageordersComponent , canActivate : [AuthguardService,  AdminauthguardService] },
     
    ])

  ],
  providers: [
    AuthService,
    AuthguardService,
    UserserviceService,
    AdminauthguardService,
    CategoryService,
    CreateproductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
