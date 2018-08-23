import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'post/edit/:id',
    component: PostFormComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'post/new',
    component: PostFormComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  { path: 'post/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
