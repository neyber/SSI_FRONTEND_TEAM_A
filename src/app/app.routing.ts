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

import {AUDIT_ROUTES } from './audit/audit.routes';
import {AuditComponent} from './audit/audit.component';
import {CreateAuditComponent} from './audit/create-audit/create-audit.component';
import {UpdateAuditComponent} from './audit/update-audit/update-audit.component';
import {ViewAuditComponent} from './audit/view-audit/view-audit.component';
import {SafetyHealthAdministrationComponent} from './safety-health-administration/safety-health-administration.component';
import {ViewSaClassificationClassComponent} from './safety-health-administration/sa-classification/view-sa-classification-class/view-sa-classification-class.component';
import {CreateSaClassificationClassComponent} from './safety-health-administration/sa-classification/create-sa-classification-class/create-sa-classification-class.component';
import {PPE_ROUTES} from './ppe/ppe-ppe/ppe.routes';
import {ViewPpeComponent} from './ppe/ppe-ppe/view-ppe/view-ppe.component';
import {CreatePpeComponent} from './ppe/ppe-ppe/create-ppe/create-ppe.component';
import {UpdatePpeComponent} from './ppe/ppe-ppe/update-ppe/update-ppe.component';
import {MANUAL_ROUTES} from './functional-manual/function-manual.routes';
import {CreateManualComponent} from './functional-manual/create-manual/create-manual.component';
import {UpdateManualComponent} from './functional-manual/update-manual/update-manual.component';

import {CreateExistingPpeComponent} from './ppe/existing-ppe/create-existing-ppe/create-existing-ppe.component';
import {ViewExistingPpeComponent} from './ppe/existing-ppe/view-existing-ppe/view-existing-ppe.component';
import {UpdateExistingPpeComponent} from './ppe/existing-ppe/update-existing-ppe/update-existing-ppe.component';
import {ViewExistingPpeAssignedComponent} from './ppe/existing-ppe-assigned/view-existing-ppe-assigned/view-existing-ppe-assigned.component';
import {CreateExistingPpeAssignedComponent} from './ppe/existing-ppe-assigned/create-existing-ppe-assigned/create-existing-ppe-assigned.component';
import {UpdateExistingPpeAssignedComponent} from './ppe/existing-ppe-assigned/update-existing-ppe-assigned/update-existing-ppe-assigned.component';



import {ViewPpeClassificationComponent} from './ppe/ppe-classification/view-ppe-classification/view-ppe-classification.component';
import {CreatePpeClassificationComponent} from './ppe/ppe-classification/create-ppe-classification/create-ppe-classification.component';
import {UpdatePpeClassificationComponent} from './ppe/ppe-classification/update-ppe-classification/update-ppe-classification.component';
import {ViewWorkItemComponent} from './work-item/work-item-wi/view-work-item/view-work-item.component';
import {UpdateWorkItemComponent} from './work-item/work-item-wi/update-work-item/update-work-item.component';
import {CreateWorkItemComponent} from './work-item/work-item-wi/create-work-item/create-work-item.component';
import {UpdateWorkItemClassComponent} from './catalog/update-work-item-class/update-work-item-class.component';
import {ViewWorkItemClassComponent} from './catalog/view-work-item-class/view-work-item-class.component';
import {CreateWorkItemClassComponent} from './catalog/create-work-item-class/create-work-item-class.component';
import {UpdateEmployeeComponent} from './personnel/employee/update-employee/update-employee.component';
import {UpdateDepartmentComponent} from './personnel/department/update-department/update-department.component';
import {UpdateRoleComponent} from './personnel/role/update-role/update-role.component';
import {UpdateSicknessComponent} from './safety-health-administration/sickness/update-sickness/update-sickness.component';
import {ViewSicknessComponent} from './safety-health-administration/sickness/view-sickness/view-sickness.component';
import {CreateSicknessComponent} from './safety-health-administration/sickness/create-sickness/create-sickness.component';
import {CreateAccidentComponent} from './safety-health-administration/accident/create-accident/create-accident.component';
import {ViewAccidentComponent} from './safety-health-administration/accident/view-accident/view-accident.component';
import {UpdateAccidentComponent} from './safety-health-administration/accident/update-accident/update-accident.component';
import {SaCategoryComponent} from './safety-health-administration/sa-classification/sa-category/sa-category.component';
import {SaType} from './shared/models/saclassification/SaType';
import {SaTypeComponent} from './safety-health-administration/sa-classification/sa-type/sa-type.component';
import {CreatesacategoryComponent} from './safety-health-administration/sa-classification/createsacategory/createsacategory.component';
import {UpdatesacategoryComponent} from './safety-health-administration/sa-classification/updatesacategory/updatesacategory.component';
import {CreatesatypeComponent} from './safety-health-administration/sa-classification/createsatype/createsatype.component';
import {UpdatesatypeComponent} from './safety-health-administration/sa-classification/updatesatype/updatesatype.component';
import { ViewSafetyRuleComponent } from './audit/view-safety-rule/view-safety-rule.component';
import { CreateSafetyRuleComponent } from './audit/create-safety-rule/create-safety-rule.component';
import { UpdateSafetyRuleComponent } from './audit/update-safety-rule/update-safety-rule.component';
import { ReportAuditSafetyRuleComponent } from './audit/report-audit-safety-rule/report-audit-safety-rule.component';
import {AuditHistoryComponent} from './audit-history/audit-history.component';
import {ChartReportComponent} from './dwh-report/chart-report/chart-report.component';
import { TabularReportComponent } from './dwh-report/tabular-report/tabular-report.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'catalog',
    component: CatalogComponent,
    children: CATALOG_ROUTES
  },
  { path: 'ppeClassificationList', component: ViewPpeClassificationComponent},
  { path: 'newPpeClassification', component: CreatePpeClassificationComponent},
  { path: 'editPpeClassification', component: UpdatePpeClassificationComponent},
  { path: 'report',
    component: ReportComponent,
    children: REPORT_ROUTES

  },
  { path: 'function', component: FunctionalManualComponent},
  { path: 'personnel', component: PersonnelComponent},
  { path: 'department', component: DepartmentComponent, children: DEPARTMENT_ROUTES},
  { path: 'departmentList', component: ViewDepartmentComponent},
  { path: 'newDepartment', component: CreateDepartmentComponent},
  { path: 'editDepartment', component: UpdateDepartmentComponent},
  { path: 'role', component: RoleComponent, children: ROLE_ROUTES},
  { path: 'roleList', component: ViewRoleComponent},
  { path: 'newRole', component: CreateRoleComponent},
  { path: 'editRole', component: UpdateRoleComponent},
  { path: 'employee', component: EmployeeComponent, children: EMPLOYEE_ROUTES},
  { path: 'employeeList', component: ViewEmployeeComponent},
  { path: 'newEmployee', component: CreateEmployeeComponent},
  { path: 'editEmployee', component: UpdateEmployeeComponent},
  { path: 'ppe', component: PpeComponent},
  { path: 'audit', component: AuditComponent, children: AUDIT_ROUTES },
  { path: 'newAudit', component: CreateAuditComponent },
  { path: 'editAudit', component: UpdateAuditComponent },
  { path: 'listAudit', component: ViewAuditComponent },
  { path: 'listSafetyRule', component: ViewSafetyRuleComponent },
  { path: 'newSafetyRule', component: CreateSafetyRuleComponent },
  { path: 'editSafetyRule', component: UpdateSafetyRuleComponent },
  { path: 'reportAuditSafetyRule', component: ReportAuditSafetyRuleComponent },
  { path: 'safetyHealthAdministration', component: SafetyHealthAdministrationComponent},
  { path: 'saClassificationList', component: ViewSaClassificationClassComponent},
  { path: 'newSaClassification', component: CreateSaClassificationClassComponent},
  { path: 'updateSickness', component: UpdateSicknessComponent},
  { path: 'sicknessList', component: ViewSicknessComponent},
  { path: 'newSickness', component: CreateSicknessComponent},
  { path: 'accidentList', component: ViewAccidentComponent},
  { path: 'newAccident', component: CreateAccidentComponent},
  { path: 'updateAccident', component: UpdateAccidentComponent},
  { path: 'saCategoryList', component: SaCategoryComponent},
  { path: 'createSaCategory', component: CreatesacategoryComponent},
  { path: 'updateSaCategory', component: UpdatesacategoryComponent},
  { path: 'saTypeList', component: SaTypeComponent},
  { path: 'createSaType', component: CreatesatypeComponent},
  { path: 'updateSaType', component: UpdatesatypeComponent},
  { path: 'ppe', component: PpeComponent, children: PPE_ROUTES},
  { path: 'ppeList', component: ViewPpeComponent},
  { path: 'newPpe', component: CreatePpeComponent},
  { path: 'editPpe', component: UpdatePpeComponent},
  { path: 'functionManual', component: FunctionalManualComponent, children: MANUAL_ROUTES},
  { path: 'newManual', component: CreateManualComponent},
  { path: 'editManual', component: UpdateManualComponent},
  { path: 'existingPpeList', component: ViewExistingPpeComponent},
  { path: 'newExistingPpe', component: CreateExistingPpeComponent},
  { path: 'editExistingPpe', component: UpdateExistingPpeComponent},
  { path: 'existingPpeAssignedList', component: ViewExistingPpeAssignedComponent},
  { path: 'newExistingPpeAssigned', component: CreateExistingPpeAssignedComponent},
  { path: 'editExistingPpeAssigned', component: UpdateExistingPpeAssignedComponent},
  { path: 'workItemList', component: ViewWorkItemComponent},
  { path: 'newWorkItem', component: CreateWorkItemComponent},
  { path: 'editWorkItem', component: UpdateWorkItemComponent},
  { path: 'workItemClassificationList', component: ViewWorkItemClassComponent},
  { path: 'newWorkItemClassification', component: CreateWorkItemClassComponent},
  { path: 'editWorkItemClassification', component: UpdateWorkItemClassComponent},
  { path: 'auditHistory', component: AuditHistoryComponent},
  { path: 'chartReport', component: ChartReportComponent},
  { path: 'tabularReport', component: TabularReportComponent },
  { path: '**', component: HomeComponent }
];


  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


