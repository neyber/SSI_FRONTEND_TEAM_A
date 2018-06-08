import { Component, OnInit } from '@angular/core';
import {ExistingPpe} from '../shared/models/existingPpe/existingPpe';
import {ExistingPpeService} from '../shared/services/existingPpe/existing-ppe.service';
import {AuditHistoryService} from '../shared/services/audit-history/audit-history.service';
import {AuditHistory} from '../shared/models/auditHistory/auditHistory';


@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.scss']
})
export class AuditHistoryComponent implements OnInit {
  history: any;
  auditHistory: AuditHistory[];

  constructor(private auditHistoryService: AuditHistoryService) {

  }

  ngOnInit() {

      this.loadHisData();


  }
  loadHisData() {
    this.auditHistoryService.getAuditHistory().subscribe(
      result => {
        this.auditHistory = result.data;
        console.log("estos son mis valores de audit history"+JSON.stringify(this.auditHistory));
        },
      error => {
        console.log('error');
      }
    );
  }

}
