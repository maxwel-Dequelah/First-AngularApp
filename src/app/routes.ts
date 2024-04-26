import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Routes } from '@angular/router';
const routesConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page',
  },
];

export default routesConfig;
