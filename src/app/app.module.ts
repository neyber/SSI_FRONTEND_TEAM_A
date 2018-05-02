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
import { PersonalProtectionComponent } from './personal-protection/personal-protection.component';
import { SicknessComponent } from './sickness/sickness.component';
import { FunctionalManualComponent } from './functional-manual/functional-manual.component';
import {ReportService} from './shared/services/report.service';
import {HttpClient} from '@angular/common/http';
import { ViewWorkItemClassComponent } from './catalog/view-work-item-class/view-work-item-class.component';
import { CreateWorkItemClassComponent } from './catalog/create-work-item-class/create-work-item-class.component';

import { PpeComponent } from './ppe/ppe.component';
import { PpeClassificationComponent } from './ppe/ppe-classification/ppe-classification.component';
import { CreatePpeClassificationComponent } from './ppe/ppe-classification/create-ppe-classification/create-ppe-classification.component';

import {WorkItemClassService} from './shared/services/workItemClass/work-item-class.service';



@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    CatalogComponent,
    HomeComponent,
    AuditComponent,
    PersonnelComponent,
    PersonalProtectionComponent,
    SicknessComponent,
    FunctionalManualComponent,
    ViewWorkItemClassComponent,
    CreateWorkItemClassComponent,
    PpeComponent,
    PpeClassificationComponent,
    CreatePpeClassificationComponent
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
    HttpClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
