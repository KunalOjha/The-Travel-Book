import { Routes } from '../../node_modules/@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { PostComponent } from './posts/components/post/post.component';

export const routes: Routes = [
  // {
  //   path: 'post',
  //   component: PostComponent
  // },
  {
    path: 'world-map',
    loadChildren: '../app/world-map/world-map.module#WorldMapModule'
  },
  {
    path: '',
    component: MainDashboardComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
