import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ICredentials } from '../model/signin.model';
import { Store } from '@ngrx/store';
import { LoginUser, LogoutUser } from './login.actions';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private store: Store<any>) {}

  watchAuthState() {
    return this.afAuth.authState.pipe(
      tap(userData => {
        if (!!userData) {
          this.store.dispatch(new LoginUser(userData));
        }
      })
    );
  }

  login(method:string, credentials?: ICredentials) {
    switch(method) {
      case 'facebook':
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .catch(error => console.log(error));

      case 'google':
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .catch(error => console.log(error));

      case 'twitter':
        return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());

      default:
      this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    this.store.dispatch(new LogoutUser())
  }

}
