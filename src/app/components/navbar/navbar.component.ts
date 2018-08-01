import { Component, ViewEncapsulation, OnChanges, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { SigninDialogComponent } from "../signin-dialog/signin-dialog.component";
import { Store } from "@ngrx/store";
import { AuthService } from "../../shared/auth.service";
import { IAppState } from "../../store/store";
import {
  activateEditMode,
  deactivateEditMode
} from "../../store/actions/mode.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  userInfo$;
  editMode$;

  constructor(
    private store: Store<IAppState>,
    private authService: AuthService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.watchAuthState().subscribe();
    this.userInfo$ = this.store.select("user");
    this.editMode$ = this.store.select("mode", "edit");
  }

  openLogInDialog() {
    this.dialog.open(SigninDialogComponent);
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
