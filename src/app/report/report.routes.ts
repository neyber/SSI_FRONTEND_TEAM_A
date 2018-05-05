import { Routes } from '@angular/router';
import {ViewReportComponent} from './view-report/view-report.component';




export const REPORT_ROUTES: Routes = [

  { path : 'tool', component: ViewReportComponent},

  { path : '**', pathMatch: 'full', redirectTo: 'tool'}

];

