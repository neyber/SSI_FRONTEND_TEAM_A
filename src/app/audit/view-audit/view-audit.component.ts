import { Component, OnInit } from '@angular/core';
import { Audit } from '../../shared/models/audit/audit';
import { AuditService } from '../../shared/services/audit/audit.service';

@Component({
  selector: 'app-view-audit',
  templateUrl: './view-audit.component.html',
  styleUrls: ['./view-audit.component.scss']
})
export class ViewAuditComponent implements OnInit {

  audits: Audit[];

  constructor(private auditService: AuditService) { }

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

}
