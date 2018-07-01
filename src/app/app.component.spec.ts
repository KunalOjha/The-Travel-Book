import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MaterialsModule } from "./materials.module";
import { FormsModule } from "@angular/forms";
import { AngularFireModule, FirebaseOptionsToken } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { EffectsModule } from "@ngrx/effects";
import { BlogEffects } from "./store/effects/blogPost.effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/store";
import { RouterModule } from "@angular/router";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";
import { SigninDialogComponent } from "./signin-dialog/signin-dialog.component";
import { APP_BASE_HREF } from "@angular/common";
import { environment } from "../environments/environment";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialsModule,
        FormsModule,
        AngularFireAuthModule,
        StoreModule.forRoot(reducers),
        RouterModule.forRoot([])
      ],
      declarations: [AppComponent, MainNavComponent, MainDashboardComponent],
      providers: [
        { provide: FirebaseOptionsToken, useValue: environment.firebase },
        { provide: APP_BASE_HREF, useValue: "/" }
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Travellist.io'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Travellist.io");
  }));
});
