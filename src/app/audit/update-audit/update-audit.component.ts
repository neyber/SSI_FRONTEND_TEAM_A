import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../shared/services/audit/audit.service';
import { AuditRequest } from '../../shared/models/audit/auditRequest';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Audit } from '../../shared/models/audit/audit';
import { DepartmentService } from '../../shared/services/Personnel/department.service';
import { Department } from '../../shared/models/Personnel/Department';

@Component({
  selector: 'app-update-audit',
  templateUrl: './update-audit.component.html',
  styleUrls: ['./update-audit.component.scss']
})
export class UpdateAuditComponent implements OnInit {

  audit: AuditRequest;
  public departments: Department[];

  constructor(private auditService: AuditService, private departmentService: DepartmentService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.audit = new AuditRequest('', '', '', '', '', '', '', null, null);
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

    this.departmentService.getDepartments().subscribe(
      result => {
        this.departments = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit(auditId) {
    this.auditService.updateAudit(auditId, this.audit).subscribe(
      response => {
        this.router.navigateByUrl('listAudit', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
