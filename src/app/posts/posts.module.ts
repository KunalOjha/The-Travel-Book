import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from '../post-form/post-form.component';

@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule
  ],
  exports: [PostFormComponent]
})
export class PostsModule { }
