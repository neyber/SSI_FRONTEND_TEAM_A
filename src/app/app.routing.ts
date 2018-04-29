import {ModuleWithProviders} from '@angular/compiler/src/core';
import {Routes, RouterModule} from '@angular/router';
// Components

import { CatalogComponent } from './catalog/catalog.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import {FunctionalManualComponent} from './functional-manual/functional-manual.component';
import {PersonnelComponent} from './personnel/personnel.component';
import {PersonalProtectionComponent} from './personal-protection/personal-protection.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch : 'full'},
  { path: 'catalog', component: CatalogComponent},
  { path: 'report', component: ReportComponent},
  { path: 'function', component: FunctionalManualComponent},
  { path: 'personal', component: PersonnelComponent},
  { path: 'personalE', component: PersonalProtectionComponent},
  { path: '**', component: HomeComponent }
];


  export const appRoutingProviders: any[] = [];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

