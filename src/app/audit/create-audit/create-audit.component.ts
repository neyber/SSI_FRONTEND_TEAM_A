import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../shared/services/audit/audit.service';
import { AuditRequest } from '../../shared/models/audit/auditRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-audit',
  templateUrl: './create-audit.component.html',
  styleUrls: ['./create-audit.component.scss']
})
export class CreateAuditComponent implements OnInit {

  public audit: AuditRequest;

  constructor(private auditService: AuditService, private router: Router) {
    this.audit = new AuditRequest('', '', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auditService.addAudit(this.audit).subscribe(
      response => {
        this.router.navigateByUrl('audit', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
