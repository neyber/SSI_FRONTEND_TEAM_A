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
import {ROLE_ROUTES} from './personnel/role/role.routes';
import {ViewRoleComponent} from './personnel/role/view-role/view-role.component';
import {CreateRoleComponent} from './personnel/role/create-role/create-role.component';
import {EmployeeComponent} from './personnel/employee/employee.component';
import {EMPLOYEE_ROUTES} from './personnel/employee/employee.route';
import {ViewEmployeeComponent} from './personnel/employee/view-employee/view-employee.component';
import {CreateEmployeeComponent} from './personnel/employee/create-employee/create-employee.component';

import {REPORT_ROUTES} from './report/report.routes';

import { AUDIT_ROUTES } from './audit/audit.routes';
import { CreateAuditComponent } from './audit/create-audit/create-audit.component';
import { UpdateAuditComponent } from './audit/update-audit/update-audit.component';
import {SafetyHealthAdministrationComponent} from './safety-health-administration/safety-health-administration.component';
import {ViewSaClassificationClassComponent} from './safety-health-administration/view-sa-classification-class/view-sa-classification-class.component';
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
  { path: 'report',
    component: ReportComponent,
    children: REPORT_ROUTES

  },
  { path: 'function', component: FunctionalManualComponent},
  { path: 'personnel', component: PersonnelComponent},
  { path: 'department', component: DepartmentComponent, children: DEPARTMENT_ROUTES},
  { path: 'departmentList', component: ViewDepartmentComponent},
  { path: 'newDepartment', component: CreateDepartmentComponent},
  { path: 'role', component: RoleComponent, children: ROLE_ROUTES},
  { path: 'roleList', component: ViewRoleComponent},
  { path: 'newRole', component: CreateRoleComponent},
  { path: 'employee', component: EmployeeComponent, children: EMPLOYEE_ROUTES},
  { path: 'employeeList', component: ViewEmployeeComponent},
  { path: 'newEmployee', component: CreateEmployeeComponent},
  { path: 'ppe', component: PpeComponent},
  { path: 'audit', component: AuditComponent, children: AUDIT_ROUTES },
  { path: 'newAudit', component: CreateAuditComponent },
  { path: 'editAudit', component: UpdateAuditComponent },
  { path: 'safetyHealthAdministration', component: SafetyHealthAdministrationComponent},
  { path: 'saClassificationList', component: ViewSaClassificationClassComponent},
  { path: 'ppe', component: PpeComponent, children: PPE_ROUTES},
  { path: 'ppeList', component: ViewPpeComponent},
  { path: 'newPpe', component: CreatePpeComponent},
  { path: '**', component: HomeComponent }
];


  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


