import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  appuser : AppUser;

  

  constructor(private auth : AuthService) {

    auth.appuser$.subscribe(appsuer => this.appuser=appsuer)
  }

  logout(){
    this.auth.logout();
  }


  

}
