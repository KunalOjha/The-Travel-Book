import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.css']
})
export class SigninDialogComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin(type, credentials?) {
    this.authService.login(type, credentials);
  }
}
