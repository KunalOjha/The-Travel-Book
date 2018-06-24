import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialsModule } from "./materials.module";
import { FormsModule } from "@angular/forms";
import {
  AngularFireModule,
  FirebaseOptionsToken,
  FirebaseAppNameToken,
  FirebaseAppConfigToken
} from "angularfire2";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";
import { SigninDialogComponent } from "./signin-dialog/signin-dialog.component";
import { AuthService } from "./shared/auth.service";
import { reducers } from "./store/store";
import { PostsModule } from "./posts/posts.module";
import { RouterModule, Routes } from "@angular/router";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from "./post/post.component";
import { BlogEffects } from "./store/effects/blogPost.effects";

const routes: Routes = [
  { path: "post/edit/:id", component: PostFormComponent, pathMatch: "full" },
  { path: "post/:id", component: PostComponent },
  { path: "", component: MainDashboardComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainDashboardComponent,
    SigninDialogComponent
  ],
  entryComponents: [SigninDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    PostsModule,
    AngularFireModule,
    AngularFireAuthModule,

    AngularFireDatabaseModule,
    EffectsModule.forRoot([BlogEffects]),
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.firebase },
    AuthService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
