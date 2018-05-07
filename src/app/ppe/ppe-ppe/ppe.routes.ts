import { Routes } from '@angular/router';
import {CreatePpeComponent} from './create-ppe/create-ppe.component';
import {ViewPpeComponent} from './view-ppe/view-ppe.component';


export const PPE_ROUTES: Routes = [
  {path: 'newPpe', component: CreatePpeComponent},
  {path: 'ppeList', component: ViewPpeComponent}
];
