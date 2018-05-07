import { Routes } from '@angular/router';

import {CreateWorkItemClassComponent} from './create-work-item-class/create-work-item-class.component';
import {ViewWorkItemClassComponent} from './view-work-item-class/view-work-item-class.component';
import {UpdateWorkItemClassComponent} from './update-work-item-class/update-work-item-class.component';


export const CATALOG_ROUTES: Routes = [

  { path : 'nuevo', component: CreateWorkItemClassComponent },
  { path : 'lista', component: ViewWorkItemClassComponent },
  { path : 'edit', component: UpdateWorkItemClassComponent },
  { path : '**', pathMatch: 'full', redirectTo: 'nuevo'}

];
