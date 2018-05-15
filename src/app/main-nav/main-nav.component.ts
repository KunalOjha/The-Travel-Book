import { Component, ViewEncapsulation, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Store } from '@ngrx/store';
import { IUserState } from '../shared/login.reducers';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { filter, tap, share} from 'rxjs/operators';
import { LogoutUser } from '../shared/login.actions';
import { AuthService } from '../shared/auth.service';
import { IAppState } from '../store';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavComponent implements OnInit {

  userInfo$: Observable<IUserState>;

  constructor(
    private store: Store<IAppState>,
    private authService : AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.authService.watchAuthState().subscribe();
    this.userInfo$ = this.store.select("user");
  }

  openLogInDialog() {
    this.dialog.open(SigninDialogComponent)
  }

  logout() {
    this.authService.logout();
  }

}
