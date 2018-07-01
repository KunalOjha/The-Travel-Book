import { TestBed, inject } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { APP_BASE_HREF } from "@angular/common";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FirebaseOptionsToken } from "angularfire2";
import { environment } from "../../environments/environment";
import { MaterialsModule } from "../materials.module";

describe("AuthService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
        AngularFireAuthModule,
        MaterialsModule
      ],
      providers: [
        AuthService,
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: FirebaseOptionsToken, useValue: environment.firebase }
      ]
    });
  });

  it("should be created", inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
