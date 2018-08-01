import { fakeAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainDashboardComponent } from "./main-dashboard.component";
import { MaterialsModule } from "../materials.module";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { StoreModule } from "@ngrx/store";

describe("MainDashboardComponent", () => {
  let component: MainDashboardComponent;
  let fixture: ComponentFixture<MainDashboardComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          MaterialsModule,
          RouterModule.forRoot([]),
          StoreModule.forRoot({})
        ],
        declarations: [MainDashboardComponent],
        providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
      }).compileComponents();

      fixture = TestBed.createComponent(MainDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should compile", () => {
    expect(component).toBeTruthy();
  });
});
