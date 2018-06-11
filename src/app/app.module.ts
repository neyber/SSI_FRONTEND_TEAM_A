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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {SsiHttpInterceptor} from './interceptor/ssi-http-interceptor';
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
import { UpdateDepartmentComponent } from './personnel/department/update-department/update-department.component';
import { ViewDepartmentComponent } from './personnel/department/view-department/view-department.component';

import {SaClassificationService} from './shared/services/saClassification/sa-classification.service';
import {DepartmentService} from './shared/services/Personnel/department.service';
import {RoleService} from './shared/services/Personnel/role.service';
import {UpdateSaClassificationClassComponent} from './safety-health-administration/sa-classification/update-sa-classification-class/update-sa-classification-class.component';
import {CreateSaClassificationClassComponent} from './safety-health-administration/sa-classification/create-sa-classification-class/create-sa-classification-class.component';
import {ViewSaClassificationClassComponent} from './safety-health-administration/sa-classification/view-sa-classification-class/view-sa-classification-class.component';
import {DeleteSaClassificationClassComponent} from './safety-health-administration/sa-classification/delete-sa-classification-class/delete-sa-classification-class.component';
import { SafetyHealthAdministrationComponent } from './safety-health-administration/safety-health-administration.component';
import { AccidentComponent } from './safety-health-administration/accident/accident.component';
import { UpdateWorkItemClassComponent } from './catalog/update-work-item-class/update-work-item-class.component';

import { EmployeeComponent } from './personnel/employee/employee.component';
import { CreateEmployeeComponent } from './personnel/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './personnel/employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './personnel/employee/view-employee/view-employee.component';
import {EmployeeService} from './shared/services/Personnel/employee.service';
import { ViewReportComponent } from './report/view-report/view-report.component';
import { AuditService } from './shared/services/audit/audit.service';
import { SaClassificationComponent } from './safety-health-administration/sa-classification/sa-classification.component';
import { CreateSicknessComponent } from './safety-health-administration/sickness/create-sickness/create-sickness.component';
import { UpdateSicknessComponent } from './safety-health-administration/sickness/update-sickness/update-sickness.component';
import { DeleteSicknessComponent } from './safety-health-administration/sickness/delete-sickness/delete-sickness.component';
import { ViewSicknessComponent } from './safety-health-administration/sickness/view-sickness/view-sickness.component';
import { CreateAccidentComponent } from './safety-health-administration/accident/create-accident/create-accident.component';
import { UpdateAccidentComponent } from './safety-health-administration/accident/update-accident/update-accident.component';
import { DeleteAccidentComponent } from './safety-health-administration/accident/delete-accident/delete-accident.component';
import { ViewAccidentComponent } from './safety-health-administration/accident/view-accident/view-accident.component';



import { ViewPpeComponent } from './ppe/ppe-ppe/view-ppe/view-ppe.component';
import { ViewReportAuditComponent } from './report/view-report-audit/view-report-audit.component';

import { UpdatePpeComponent } from './ppe/ppe-ppe/update-ppe/update-ppe.component';
import { CreateManualComponent } from './functional-manual/create-manual/create-manual.component';
import { DeleteManualComponent } from './functional-manual/delete-manual/delete-manual.component';
import { UpdateManualComponent } from './functional-manual/update-manual/update-manual.component';
import { ViewManualComponent } from './functional-manual/view-manual/view-manual.component';
import {FunctionManualService} from './shared/services/functionManual/function-manual.service';
import { ExistingPpeComponent } from './ppe/existing-ppe/existing-ppe.component';
import { CreateExistingPpeComponent } from './ppe/existing-ppe/create-existing-ppe/create-existing-ppe.component';
import { UpdateExistingPpeComponent } from './ppe/existing-ppe/update-existing-ppe/update-existing-ppe.component';
import { ViewExistingPpeComponent } from './ppe/existing-ppe/view-existing-ppe/view-existing-ppe.component';
import {ExistingPpeService} from '../app/shared/services/existingPpe/existing-ppe.service';
import { ExistingPpeAssignedComponent } from './ppe/existing-ppe-assigned/existing-ppe-assigned.component';
import { CreateExistingPpeAssignedComponent } from './ppe/existing-ppe-assigned/create-existing-ppe-assigned/create-existing-ppe-assigned.component';
import { ViewExistingPpeAssignedComponent } from './ppe/existing-ppe-assigned/view-existing-ppe-assigned/view-existing-ppe-assigned.component';
import { UpdateExistingPpeAssignedComponent } from './ppe/existing-ppe-assigned/update-existing-ppe-assigned/update-existing-ppe-assigned.component';
import {ExistingPpeAssignedService} from './shared/services/existingPpeAssigned/existing-ppe-assigned.service';
import {DatePipe} from '@angular/common';
import { WorkItemComponent } from './work-item/work-item.component';
import { WorkItemWiComponent } from './work-item/work-item-wi/work-item-wi.component';
import { CreateWorkItemComponent } from './work-item/work-item-wi/create-work-item/create-work-item.component';
import { UpdateWorkItemComponent } from './work-item/work-item-wi/update-work-item/update-work-item.component';
import { ViewWorkItemComponent } from './work-item/work-item-wi/view-work-item/view-work-item.component';
import {WorkItemService} from './shared/services/workItem/work-item.service';

import { ViewReportSicknessComponent } from './report/view-report-sickness/view-report-sickness.component';
import { ViewReportFunctionmComponent } from './report/view-report-functionm/view-report-functionm.component';
import { ViewReportEmployeeComponent } from './report/view-report-employee/view-report-employee.component';
import { ViewReportPpeComponent } from './report/view-report-ppe/view-report-ppe.component';
import {SicknessService} from './shared/services/sickness/sickness.service';
import {SaCategoryService} from './shared/services/saClassification/sa-category.service';
import {SaTypeService} from './shared/services/saClassification/sa-type.service';
import {AccidentService} from './shared/services/accident/accident.service';
import { SaCategoryComponent } from './safety-health-administration/sa-classification/sa-category/sa-category.component';
import { SaTypeComponent } from './safety-health-administration/sa-classification/sa-type/sa-type.component';
import { CreatesatypeComponent } from './safety-health-administration/sa-classification/createsatype/createsatype.component';
import { UpdatesatypeComponent } from './safety-health-administration/sa-classification/updatesatype/updatesatype.component';
import { CreatesacategoryComponent } from './safety-health-administration/sa-classification/createsacategory/createsacategory.component';
import { UpdatesacategoryComponent } from './safety-health-administration/sa-classification/updatesacategory/updatesacategory.component';
import { CreateSafetyRuleComponent } from './audit/create-safety-rule/create-safety-rule.component';
import { ViewSafetyRuleComponent } from './audit/view-safety-rule/view-safety-rule.component';
import { SafetyRuleService } from './shared/services/safety-rule/safety-rule.service';
import { UpdateSafetyRuleComponent } from './audit/update-safety-rule/update-safety-rule.component';
import { ReportAuditSafetyRuleComponent } from './audit/report-audit-safety-rule/report-audit-safety-rule.component';
import { AuditHistoryComponent } from './audit-history/audit-history.component';
import {AuditHistoryService} from './shared/services/audit-history/audit-history.service';
import {AccidentReportService} from './shared/services/accidentReport/accident-report.service';
import { ChartReportComponent } from './dwh-report/chart-report/chart-report.component';
import { TabularReportComponent } from './dwh-report/tabular-report/tabular-report.component';


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
    UpdateDepartmentComponent,
    ViewDepartmentComponent,
    DeleteSaClassificationClassComponent,
    ViewSaClassificationClassComponent,
    CreateSaClassificationClassComponent,
    UpdateSaClassificationClassComponent,
    SafetyHealthAdministrationComponent,
    AccidentComponent,

    UpdateWorkItemClassComponent,

    EmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    ViewReportComponent,
    ViewPpeComponent,
    ViewReportAuditComponent,

    UpdatePpeComponent,
    CreateManualComponent,
    DeleteManualComponent,
    UpdateManualComponent,
    ViewManualComponent,
    SaClassificationComponent,
    CreateSicknessComponent,
    UpdateSicknessComponent,
    DeleteSicknessComponent,
    ViewSicknessComponent,
    CreateAccidentComponent,
    UpdateAccidentComponent,
    DeleteAccidentComponent,
    ViewAccidentComponent,
    UpdatePpeComponent,
    ExistingPpeComponent,
    CreateExistingPpeComponent,
    UpdateExistingPpeComponent,
    ViewExistingPpeComponent,
    ExistingPpeAssignedComponent,
    CreateExistingPpeAssignedComponent,
    ViewExistingPpeAssignedComponent,
    UpdateExistingPpeAssignedComponent,
    ViewReportSicknessComponent,
    ViewReportFunctionmComponent,
    WorkItemComponent,
    WorkItemWiComponent,
    CreateWorkItemComponent,
    UpdateWorkItemComponent,
    ViewWorkItemComponent,
    ViewReportEmployeeComponent,
    ViewReportPpeComponent,
    CreateSicknessComponent,
    SaCategoryComponent,
    SaTypeComponent,
    CreatesatypeComponent,
    UpdatesatypeComponent,
    CreatesacategoryComponent,
    UpdatesacategoryComponent,
    CreateSafetyRuleComponent,
    ViewSafetyRuleComponent,
    UpdateSafetyRuleComponent,
    ReportAuditSafetyRuleComponent,
    AuditHistoryComponent,
    ChartReportComponent,
    TabularReportComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SsiHttpInterceptor,
      multi: true
    },
    ReportService,
    WorkItemClassService,
    PpeClassificationService,
    SaClassificationService,
    HttpClient,
    PpeService,
    DepartmentService,
    RoleService,
    EmployeeService,
    AuditService,
    FunctionManualService,
    ExistingPpeService,
    ExistingPpeAssignedService,
    DatePipe,
    WorkItemService,
    SicknessService,
    SaCategoryService,
    SaTypeService,
    AccidentService,
    SafetyRuleService,
    AuditHistoryService,
    AccidentReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

