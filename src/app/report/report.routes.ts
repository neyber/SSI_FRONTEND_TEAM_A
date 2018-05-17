import { Routes } from '@angular/router';
import {ViewReportComponent} from './view-report/view-report.component';
import {ViewReportAuditComponent} from './view-report-audit/view-report-audit.component';
import {ViewReportSicknessComponent} from './view-report-sickness/view-report-sickness.component';
import {ViewReportFunctionmComponent} from './view-report-functionm/view-report-functionm.component';
import {ViewReportEmployeeComponent} from './view-report-employee/view-report-employee.component';
import {ViewReportPpeComponent} from './view-report-ppe/view-report-ppe.component';




export const REPORT_ROUTES: Routes = [

  { path : 'tool', component: ViewReportComponent},
  { path : 'audit', component: ViewReportAuditComponent},
  { path : 'sickness', component: ViewReportSicknessComponent},
  { path : 'function', component: ViewReportFunctionmComponent},
  { path : 'EmployeeReport', component: ViewReportEmployeeComponent},
  { path : 'PPEReport', component: ViewReportPpeComponent},
  { path : '**', pathMatch: 'full', redirectTo: 'tool'}

];

