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
import { ProductsComponent } from './products/products.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    OrdersuccessComponent,
    ManageproductsComponent,
    ManageordersComponent,
    MyOrdersComponent,
    LoginpageComponent,
    AuthguardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([

      { path : '' , component : HomepageComponent },
      { path : 'products' , component : ProductsComponent },
      { path : 'cart' , component : CartComponent},
      { path : 'loginpage' , component : LoginpageComponent },


      { path : 'checkout' , component : CheckoutComponent , canActivate : [AuthguardService] },
      { path : 'ordersuccess' , component : OrdersuccessComponent , canActivate : [AuthguardService] },
      { path : 'my-orders' , component : MyOrdersComponent , canActivate : [AuthguardService] },

      { path : 'admin/manageproducts' , component : ManageproductsComponent , canActivate : [AuthguardService, AdminauthguardService] },
      { path : 'admin/manageorders' , component : ManageordersComponent , canActivate : [AuthguardService,  AdminauthguardService] },
     
    ])

  ],
  providers: [
    AuthService,
    AuthguardService,
    UserserviceService,
    AdminauthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }