import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../shared/services/audit/audit.service';
import { AuditRequest } from '../../shared/models/audit/auditRequest';
import { Router } from '@angular/router';
import { DepartmentService } from '../../shared/services/Personnel/department.service';
import { Department } from '../../shared/models/Personnel/Department';

@Component({
  selector: 'app-create-audit',
  templateUrl: './create-audit.component.html',
  styleUrls: ['./create-audit.component.scss']
})
export class CreateAuditComponent implements OnInit {

  public audit: AuditRequest;
  public departments: Department[];

  constructor(private auditService: AuditService, private departmentService: DepartmentService, private router: Router) {
    this.audit = new AuditRequest('', '', '', '', '', '', '', null, null);
  }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      result => {
        this.departments = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit() {
    this.auditService.addAudit(this.audit).subscribe(
      response => {
        this.router.navigateByUrl('listAudit', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
