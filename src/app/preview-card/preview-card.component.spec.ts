import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PreviewCardComponent } from "./preview-card.component";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { StoreModule } from "@ngrx/store";

describe("PreviewCardComponent", () => {
  let component: PreviewCardComponent;
  let fixture: ComponentFixture<PreviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), StoreModule.forRoot({})],
      declarations: [PreviewCardComponent],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: 1 } } }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
