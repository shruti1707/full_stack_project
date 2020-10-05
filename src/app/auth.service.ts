import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable , of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserserviceService } from './userservice.service';
import { switchMap } from 'rxjs/operators';



@Injectable({  
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;

  constructor(private af : AngularFireAuth , private route : ActivatedRoute, private userservice : UserserviceService) { 
    this.user$ = af.authState;
    


  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl' , returnUrl);
    this.af.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.af.signOut();
  }


  get appuser$() : Observable<AppUser> {
    return this.user$.pipe(switchMap(user => {
      if(user) {
      return this.userservice.get(user.uid).valueChanges();
      }
      else return of(null) ;
    }));
  }


}
