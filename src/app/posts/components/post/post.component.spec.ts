import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PostComponent } from "./post.component";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { StoreModule } from "@ngrx/store";

describe("PostComponent", () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), StoreModule.forRoot({})],
      declarations: [PostComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
