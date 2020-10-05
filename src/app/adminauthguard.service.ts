import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { UserserviceService } from './userservice.service';
import { Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate{

  constructor(private auth : AuthService, private userservice : UserserviceService) {}

    canActivate() : Observable<boolean>{

      return this.auth.appuser$.pipe(

     
      map(appuser => appuser.isAdmin)
      );
     }
}
