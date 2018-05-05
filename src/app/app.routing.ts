import {ModuleWithProviders} from '@angular/compiler/src/core';
import {Routes, RouterModule} from '@angular/router';

// Components

import { CatalogComponent } from './catalog/catalog.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';

import { FunctionalManualComponent } from './functional-manual/functional-manual.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PpeComponent } from './ppe/ppe.component';

import { CATALOG_ROUTES } from './catalog/catalog.routes';
import {AuditComponent} from './audit/audit.component';
import {DepartmentComponent} from './personnel/department/department.component';
import {RoleComponent} from './personnel/role/role.component';
import {DEPARTMENT_ROUTES} from './personnel/department/department.routes';
import {ViewDepartmentComponent} from './personnel/department/view-department/view-department.component';
import {CreateDepartmentComponent} from './personnel/department/create-department/create-department.component';
import {PPE_ROUTES} from './ppe/ppe-ppe/ppe.routes';
import {ViewPpeComponent} from './ppe/ppe-ppe/view-ppe/view-ppe.component';
import {CreatePpeComponent} from './ppe/ppe-ppe/create-ppe/create-ppe.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'catalog',
    component: CatalogComponent,
    children: CATALOG_ROUTES
  },
  { path: 'report', component: ReportComponent},
  { path: 'function', component: FunctionalManualComponent},
  { path: 'personnel', component: PersonnelComponent},
  { path: 'department', component: DepartmentComponent, children: DEPARTMENT_ROUTES},
  { path: 'departmentList', component: ViewDepartmentComponent},
  { path: 'newDepartment', component: CreateDepartmentComponent},
  { path: 'role', component: RoleComponent},
  { path: 'ppe', component: PpeComponent, children: PPE_ROUTES},
  { path: 'ppeList', component: ViewPpeComponent},
  { path: 'newPpe', component: CreatePpeComponent},
  { path: 'audit', component: AuditComponent },
  { path: '**', component: HomeComponent }
];


  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


