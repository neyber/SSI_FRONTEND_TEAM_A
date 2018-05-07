import { Routes } from '@angular/router';
import {CreateDepartmentComponent} from '../department/create-department/create-department.component';

export const DEPARTMENT_ROUTES: Routes = [
  {path: 'newDepartment', component: CreateDepartmentComponent}
];
