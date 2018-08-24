import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { Store } from '@ngrx/store';
import { AuthService } from '../../shared/auth.service';
import { IAppState } from '../../store/store';
import {
  activateEditMode,
  deactivateEditMode
} from '../../store/actions/mode.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  id: string;
  userInfo$;
  editMode$;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private store: Store<IAppState>,
    private authService: AuthService,
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.authService.watchAuthState().subscribe();
    this.userInfo$ = this.store.select('user').pipe(shareReplay());
    this.editMode$ = this.store.select('mode', 'edit').pipe(shareReplay());
  }

  openLogInDialog() {
    this.dialog.open(SigninDialogComponent);
  }

  onNewPost() {
    this.postService.navToNewPostForm();
  }

  switchToEditMode() {
    this.store.dispatch(new activateEditMode());
  }

  switchToViewMode() {
    this.store.dispatch(new deactivateEditMode());
  }

  logout() {
    this.authService.logout();
    this.store.dispatch(new deactivateEditMode());
  }
}
