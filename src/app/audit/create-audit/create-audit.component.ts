import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../shared/services/audit/audit.service';
import { AuditRequest } from '../../shared/models/audit/auditRequest';
import { Router } from '@angular/router';
import { DepartmentService } from '../../shared/services/Personnel/department.service';
import { Department } from '../../shared/models/Personnel/Department';
import { EmployeeService } from '../../shared/services/Personnel/employee.service';
import { Employee } from '../../shared/models/Personnel/Employee';

@Component({
  selector: 'app-create-audit',
  templateUrl: './create-audit.component.html',
  styleUrls: ['./create-audit.component.scss']
})
export class CreateAuditComponent implements OnInit {

  public audit: AuditRequest;
  public departments: Department[];
  public employees: Employee[];

  constructor(private auditService: AuditService, private departmentService: DepartmentService, private router: Router, private employeeService: EmployeeService) {
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

    this.employeeService.getEmployees().subscribe(
      result => {
        this.employees = result.data;
      },
      error => {
        console.log('error');
        
      }
    )
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
