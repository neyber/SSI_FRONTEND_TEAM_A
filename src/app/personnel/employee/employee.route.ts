import { Routes } from '@angular/router';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';

export const EMPLOYEE_ROUTES: Routes = [
  {path: 'newEmployee', component: CreateEmployeeComponent}
];
