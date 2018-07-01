import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostFormComponent } from "./post-form.component";
import { FormsModule } from "@angular/forms";
import { PreviewCardComponent } from "../preview-card/preview-card.component";
import { QuillEditorComponent } from "ngx-quill";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FirebaseOptionsToken } from "angularfire2";
import { environment } from "../../environments/environment";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable, of } from "rxjs";

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
      declarations: [
        PostFormComponent,
        PreviewCardComponent,
        QuillEditorComponent
      ],
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
