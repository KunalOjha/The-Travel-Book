import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from '../post-form/post-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PostFormComponent]
})
export class PostsModule { }
