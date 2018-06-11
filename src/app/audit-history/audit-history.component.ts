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
  modifiedBy: any;
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
         },
      error => {
        console.log('error');
      }
    );
  }

}
