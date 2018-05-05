import { Routes } from '@angular/router';
import {ViewReportComponent} from './view-report/view-report.component';
import {ViewReportAuditComponent} from './view-report-audit/view-report-audit.component';




export const REPORT_ROUTES: Routes = [

  { path : 'tool', component: ViewReportComponent},
  { path : 'audit', component: ViewReportAuditComponent},

  { path : '**', pathMatch: 'full', redirectTo: 'tool'}

];

