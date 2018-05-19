import { Component, OnInit } from '@angular/core';
import { SafetyRuleService } from '../../shared/services/safety-rule/safety-rule.service';
import { SafetyRuleRequest } from '../../shared/models/safetyRule/safetyRuleRequest'
import { AuditService } from '../../shared/services/audit/audit.service';
import { Audit } from '../../shared/models/audit/audit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-safety-rule',
  templateUrl: './create-safety-rule.component.html',
  styleUrls: ['./create-safety-rule.component.scss']
})
export class CreateSafetyRuleComponent implements OnInit {

  public safetyRule: SafetyRuleRequest;
  public audits: Audit[];

  constructor(private safetyRuleService: SafetyRuleService, private auditService: AuditService, private router: Router) { 
    this.safetyRule = new SafetyRuleRequest('', '', 0, 0, false);
  }

  ngOnInit() {
    this.auditService.getListAudit().subscribe(
      result => {
        this.audits = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit() {
    this.safetyRuleService.addSafetyRule(this.safetyRule).subscribe(
      response => {
        this.router.navigateByUrl('listSafetyRule', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
