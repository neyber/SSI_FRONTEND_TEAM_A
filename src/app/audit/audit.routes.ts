import { Routes } from '@angular/router';
import { CreateAuditComponent } from './create-audit/create-audit.component';
import { UpdateAuditComponent } from './update-audit/update-audit.component';

export const AUDIT_ROUTES: Routes = [
    { path: 'newAudit', component: CreateAuditComponent },
    { path: 'editAudit', component: UpdateAuditComponent }
];