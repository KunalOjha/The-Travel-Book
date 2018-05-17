import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from '../post-form/post-form.component';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    QuillModule
  ],
  exports: [PostFormComponent]
})
export class PostsModule { }
