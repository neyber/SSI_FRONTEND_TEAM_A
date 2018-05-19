import { Component, OnInit } from '@angular/core';
import { SafetyRule } from '../../shared/models/safetyRule/safetyRule';
import { SafetyRuleService } from '../../shared/services/safety-rule/safety-rule.service';

@Component({
  selector: 'app-report-audit-safety-rule',
  templateUrl: './report-audit-safety-rule.component.html',
  styleUrls: ['./report-audit-safety-rule.component.scss']
})
export class ReportAuditSafetyRuleComponent implements OnInit {

  safetyRules: SafetyRule[];
  dateNow: Date;

  constructor(private safetyRuleService: SafetyRuleService) { 

  }

  ngOnInit() {
    this.safetyRuleService.getListSafetyRule().subscribe(
      result => {
        this.safetyRules = result.data;
        this.dateNow = new Date();
      },
      error => {
        console.log('error');
      }
    );
  }

}
