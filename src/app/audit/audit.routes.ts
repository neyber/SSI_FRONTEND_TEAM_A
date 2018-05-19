import { Routes } from '@angular/router';
import { CreateAuditComponent } from './create-audit/create-audit.component';
import { UpdateAuditComponent } from './update-audit/update-audit.component';
import { ViewAuditComponent } from './view-audit/view-audit.component';
import { ViewSafetyRuleComponent } from './view-safety-rule/view-safety-rule.component';
import { CreateSafetyRuleComponent } from './create-safety-rule/create-safety-rule.component';
import { UpdateSafetyRuleComponent } from './update-safety-rule/update-safety-rule.component';

export const AUDIT_ROUTES: Routes = [
    { path: 'newAudit', component: CreateAuditComponent },
    { path: 'editAudit', component: UpdateAuditComponent },
    { path: 'listAudit', component: ViewAuditComponent },
    { path: 'listSafetyRule', component: ViewSafetyRuleComponent },
    { path: 'newSafetyRule', component: CreateSafetyRuleComponent },
    { path: 'editSafetyRule', component: UpdateSafetyRuleComponent }
];