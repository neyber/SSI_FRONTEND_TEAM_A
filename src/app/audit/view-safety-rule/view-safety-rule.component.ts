import { Component, OnInit } from '@angular/core';
import { SafetyRule } from '../../shared/models/safetyRule/safetyRule';
import { SafetyRuleService } from '../../shared/services/safety-rule/safety-rule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-safety-rule',
  templateUrl: './view-safety-rule.component.html',
  styleUrls: ['./view-safety-rule.component.scss']
})
export class ViewSafetyRuleComponent implements OnInit {

  safetyRules: SafetyRule[];

  constructor(private safetyRuleService: SafetyRuleService, private router: Router) { }

  ngOnInit() {
    this.safetyRuleService.getListSafetyRule().subscribe(
      result => {
        this.safetyRules = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
