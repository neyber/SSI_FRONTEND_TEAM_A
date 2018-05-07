import { Component, OnInit } from '@angular/core';
import {AuditService} from '../../shared/services/audit/audit.service';
import {Router} from '@angular/router';
import {Audit} from '../../shared/models/audit/audit';

@Component({
  selector: 'app-view-report-audit',
  templateUrl: './view-report-audit.component.html'

})
export class ViewReportAuditComponent implements OnInit {
  audits: Audit[];
  constructor(private auditService: AuditService, private router: Router) { }

  ngOnInit() {

    this.auditService.getListAudit().subscribe(
      result => {
        this.audits = result.data;
        console.log(" este es el valor de audit"+ JSON.stringify(this.audits));
      },
      error => {
        console.log('error');
      }
    );
  }

}
