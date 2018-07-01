import { fakeAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainNavComponent } from "./main-nav.component";
import { MaterialsModule } from "../materials.module";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FirebaseOptionsToken } from "angularfire2";
import { environment } from "../../environments/environment";
import { PreviewCardComponent } from "../preview-card/preview-card.component";

describe("MainNavComponent", () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialsModule,
          AngularFireAuthModule,
          StoreModule.forRoot({}),
          RouterModule.forRoot([])
        ],
        declarations: [MainNavComponent],
        providers: [
          { provide: FirebaseOptionsToken, useValue: environment.firebase },
          { provide: APP_BASE_HREF, useValue: "/" }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(MainNavComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
