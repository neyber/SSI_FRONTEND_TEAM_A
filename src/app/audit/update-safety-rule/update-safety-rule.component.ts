import { Component, OnInit } from '@angular/core';
import { SafetyRuleService } from '../../shared/services/safety-rule/safety-rule.service';
import { SafetyRuleRequest } from '../../shared/models/safetyRule/safetyRuleRequest'
import { AuditService } from '../../shared/services/audit/audit.service';
import { Audit } from '../../shared/models/audit/audit';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-safety-rule',
  templateUrl: './update-safety-rule.component.html',
  styleUrls: ['./update-safety-rule.component.scss']
})
export class UpdateSafetyRuleComponent implements OnInit {

  public safetyRule: SafetyRuleRequest;
  public audits: Audit[];

  constructor(private safetyRuleService: SafetyRuleService, private auditService: AuditService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.safetyRule = new SafetyRuleRequest('', '', 0, 0, false);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let safetyRuleId = params['safetyRuleId'];
      this.safetyRuleService.getSafetyRuleById(safetyRuleId).subscribe(
        result => {
          this.safetyRule = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });

    this.auditService.getListAudit().subscribe(
      result => {
        this.audits = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit(safetyRuleId) {
    this.safetyRuleService.updateSafetyRule(safetyRuleId, this.safetyRule).subscribe(
      response => {
        this.router.navigateByUrl('listSafetyRule', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
