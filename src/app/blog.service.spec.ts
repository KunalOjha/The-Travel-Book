import { TestBed, inject } from "@angular/core/testing";

import { BlogService } from "./blog.service";
import { StoreModule } from "@ngrx/store";

describe("BlogService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [BlogService]
    });
  });

  it("should be created", inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
