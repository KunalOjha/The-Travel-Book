import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostFormComponent } from "./post-form.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FirebaseOptionsToken } from "angularfire2";
import { environment } from "../../../environments/environment";
import { QuillEditorComponent } from "../../../../node_modules/ngx-quill";
import { of } from "../../../../node_modules/rxjs";

describe("PostFormComponent", () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        AngularFireDatabaseModule,
        RouterModule.forRoot([]),
        FormsModule
      ],
      declarations: [PostFormComponent, QuillEditorComponent],
      providers: [
        { provide: FirebaseOptionsToken, useValue: environment.firebase },
        { provide: APP_BASE_HREF, useValue: "/" }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    component.mode$ = of("").subscribe();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
