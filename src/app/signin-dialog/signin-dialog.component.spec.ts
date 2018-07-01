import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SigninDialogComponent } from "./signin-dialog.component";
import { FormsModule } from "@angular/forms";
import { MaterialsModule } from "../materials.module";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { APP_BASE_HREF } from "@angular/common";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FirebaseOptionsToken } from "angularfire2";
import { environment } from "../../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SigninDialogComponent", () => {
  let component: SigninDialogComponent;
  let fixture: ComponentFixture<SigninDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialsModule,
        AngularFireAuthModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({})
      ],
      declarations: [SigninDialogComponent],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: FirebaseOptionsToken, useValue: environment.firebase }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
