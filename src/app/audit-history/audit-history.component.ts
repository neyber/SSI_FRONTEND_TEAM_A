import { Component, OnInit } from '@angular/core';
import {ExistingPpe} from '../shared/models/existingPpe/existingPpe';
import {ExistingPpeService} from '../shared/services/existingPpe/existing-ppe.service';
import {AuditHistoryService} from '../shared/services/audit-history/audit-history.service';


@Component({
  selector: 'app-audit-history',
  templateUrl: './audit-history.component.html',
  styleUrls: ['./audit-history.component.scss']
})
export class AuditHistoryComponent implements OnInit {
  history: any;
  existingPpes: ExistingPpe[];

  constructor(private auditHistoryService: AuditHistoryService) {

  }

  ngOnInit() {

      this.loadPPEData();


  }
  loadPPEData() {
    this.auditHistoryService.getExistingPpe().subscribe(
      result => {
        this.existingPpes = result.data;
        console.log("estos son mis valores de audit history"+JSON.stringify(this.existingPpes));
        },
      error => {
        console.log('error');
      }
    );
  }

}
