import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../shared/services/audit/audit.service';
import { AuditRequest } from '../../shared/models/audit/auditRequest';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Audit } from '../../shared/models/audit/audit';

@Component({
  selector: 'app-update-audit',
  templateUrl: './update-audit.component.html',
  styleUrls: ['./update-audit.component.scss']
})
export class UpdateAuditComponent implements OnInit {

  audit: AuditRequest;

  constructor(private auditService: AuditService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.audit = new AuditRequest('', '', '', '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let auditId = params['auditId'];
      this.auditService.getAuditById(auditId).subscribe(
        result => {
          this.audit = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }

  onSubmit(auditId) {
    this.auditService.updateAudit(auditId, this.audit).subscribe(
      response => {
        this.router.navigateByUrl('audit', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
