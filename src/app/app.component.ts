import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userservice : UserserviceService , private auth : AuthService , router : Router){
    auth.user$.subscribe(user =>{

      if(user){
        userservice.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }

    });
  }
}


