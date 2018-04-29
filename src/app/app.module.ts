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
    FunctionalManualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
