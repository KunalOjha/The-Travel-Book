import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ICredentials } from '../model/signin.model';
import { Store } from '@ngrx/store';
import { LoginUser, LogoutUser, LoginAdmin } from '../store/actions/login.actions'
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { MainDashboardComponent } from '../main-dashboard/main-dashboard.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private adminId ='XI6JVm0PdARwR2QcdMQykNnKJFS2';

  constructor(private router: Router,  private afAuth: AngularFireAuth, private store: Store<any>, private snackBar: MatSnackBar) {}

  watchAuthState() {
    return this.afAuth.authState.pipe(
      tap(userData => {
        if (!!userData) {
          this.snackBar.open(`Welcome, ${userData.displayName}!`, null, {duration: 2000})
          this.store.dispatch(new LoginUser(userData));
          if (this.adminId === userData.uid)
          this.store.dispatch(new LoginAdmin())
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
    this.store.dispatch(new LogoutUser());
    this.router.navigate([''])
  }

}
