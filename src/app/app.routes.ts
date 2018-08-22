import { Routes } from '../../node_modules/@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { WorldMapComponent } from './world-map/components/world-map/world-map.component';

export const routes: Routes = [
  {
    path: 'world-map',
    component: WorldMapComponent
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
