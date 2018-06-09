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
    //const i = 0;
    this.auditHistoryService.getAuditHistory().subscribe(
      result => {

        this.auditHistory = result.data;
        //this.modifiedBy = result.data.modifiedBy;
        console.log("estos son mis valores de audit history1"+ JSON.stringify(result.data.modifiedBy) );
        console.log("estos son mis valores de audit history2"+ JSON.stringify(this.modifiedBy));
        },
      error => {
        console.log('error');
      }
    );
  }

}
