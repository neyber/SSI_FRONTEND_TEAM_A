import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { AuditComponent } from './audit/audit.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { SicknessComponent } from './safety-health-administration/sickness/sickness.component';
import { FunctionalManualComponent } from './functional-manual/functional-manual.component';
import {ReportService} from './shared/services/report.service';
import {HttpClient} from '@angular/common/http';
import { ViewWorkItemClassComponent } from './catalog/view-work-item-class/view-work-item-class.component';
import { CreateWorkItemClassComponent } from './catalog/create-work-item-class/create-work-item-class.component';

import { PpeComponent } from './ppe/ppe.component';
import { PpeClassificationComponent } from './ppe/ppe-classification/ppe-classification.component';
import { CreatePpeClassificationComponent } from './ppe/ppe-classification/create-ppe-classification/create-ppe-classification.component';

import {WorkItemClassService} from './shared/services/workItemClass/work-item-class.service';
import { ViewPpeClassificationComponent } from './ppe/ppe-classification/view-ppe-classification/view-ppe-classification.component';
import { UpdatePpeClassificationComponent } from './ppe/ppe-classification/update-ppe-classification/update-ppe-classification.component';
import { DeletePpeClassificationComponent } from './ppe/ppe-classification/delete-ppe-classification/delete-ppe-classification.component';
import {PpeClassificationService} from './shared/services/ppeClassification/ppe-classification.service';
import {PpeService} from './shared/services/ppe/ppe.service';
import { CreatePpeComponent } from './ppe/ppe-ppe/create-ppe/create-ppe.component';
import { PpePpeComponent } from './ppe/ppe-ppe/ppe-ppe.component';
import { RoleComponent } from './personnel/role/role.component';
import { CreateRoleComponent } from './personnel/role/create-role/create-role.component';
import { DeleteRoleComponent } from './personnel/role/delete-role/delete-role.component';
import { UpdateRoleComponent } from './personnel/role/update-role/update-role.component';
import { ViewRoleComponent } from './personnel/role/view-role/view-role.component';
import { CreateAuditComponent } from './audit/create-audit/create-audit.component';
import { UpdateAuditComponent } from './audit/update-audit/update-audit.component';
import { DeleteAuditComponent } from './audit/delete-audit/delete-audit.component';
import { ViewAuditComponent } from './audit/view-audit/view-audit.component';
import { ExistingWorkItemComponent } from './catalog/existing-work-item/existing-work-item.component';
import { ViewExistingWorkItemComponent } from './catalog/existing-work-item/view-existing-work-item/view-existing-work-item.component';
import { DepartmentComponent } from './personnel/department/department.component';
import { CreateDepartmentComponent } from './personnel/department/create-department/create-department.component';
import { DeleteDepartmentComponent } from './personnel/department/delete-department/delete-department.component';
import { UpdateDepartmentComponent } from './personnel/department/update-department/update-department.component';
import { ViewDepartmentComponent } from './personnel/department/view-department/view-department.component';

import {SaClassificationService} from './shared/services/saClassification/sa-classification.service';
import {DepartmentService} from './shared/services/Personnel/department.service';
import {RoleService} from './shared/services/Personnel/role.service';
import {UpdateSaClassificationClassComponent} from './safety-health-administration/update-sa-classification-class/update-sa-classification-class.component';
import {CreateSaClassificationClassComponent} from './safety-health-administration/create-sa-classification-class/create-sa-classification-class.component';
import {ViewSaClassificationClassComponent} from './safety-health-administration/view-sa-classification-class/view-sa-classification-class.component';
import {DeleteSaClassificationClassComponent} from './safety-health-administration/delete-sa-classification-class/delete-sa-classification-class.component';

import { UpdateWorkItemClassComponent } from './catalog/update-work-item-class/update-work-item-class.component';

import { EmployeeComponent } from './personnel/employee/employee.component';
import { CreateEmployeeComponent } from './personnel/employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './personnel/employee/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './personnel/employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './personnel/employee/view-employee/view-employee.component';
import {EmployeeService} from './shared/services/Personnel/employee.service';
import { AuditService } from './shared/services/audit/audit.service';





@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    CatalogComponent,
    HomeComponent,
    AuditComponent,
    PersonnelComponent,
    SicknessComponent,
    FunctionalManualComponent,
    ViewWorkItemClassComponent,
    CreateWorkItemClassComponent,
    PpeComponent,
    PpeClassificationComponent,
    CreatePpeClassificationComponent,
    ViewPpeClassificationComponent,
    UpdatePpeClassificationComponent,
    DeletePpeClassificationComponent,
    CreatePpeComponent,
    PpePpeComponent,
    DeletePpeClassificationComponent,
    RoleComponent,
    CreateRoleComponent,
    DeleteRoleComponent,
    UpdateRoleComponent,
    ViewRoleComponent,
    CreateAuditComponent,
    UpdateAuditComponent,
    DeleteAuditComponent,
    ViewAuditComponent,
    ExistingWorkItemComponent,
    ViewExistingWorkItemComponent,
    DepartmentComponent,
    CreateDepartmentComponent,
    DeleteDepartmentComponent,
    UpdateDepartmentComponent,
    ViewDepartmentComponent,
    DeleteSaClassificationClassComponent,
    ViewSaClassificationClassComponent,
    CreateSaClassificationClassComponent,
    UpdateSaClassificationClassComponent,

    UpdateWorkItemClassComponent,

    EmployeeComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ReportService,
    WorkItemClassService,
    PpeClassificationService,
    SaClassificationService,
    HttpClient,
    PpeService,
    DepartmentService,
    RoleService,
    EmployeeService,
    AuditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
