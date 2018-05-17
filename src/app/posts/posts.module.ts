import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from '../post-form/post-form.component';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { PreviewCardComponent } from '../preview-card/preview-card.component';
import { MaterialsModule } from '../materials.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostFormComponent, PreviewCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    QuillModule,
    MaterialsModule
  ],
  exports: [PostFormComponent]
})
export class PostsModule { }
