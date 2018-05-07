import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';
import {RoleService} from '../../../shared/services/Personnel/role.service';
import {DepartmentService} from '../../../shared/services/Personnel/department.service';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {Router} from '@angular/router';
import {Role} from '../../../shared/models/Personnel/Role';
import {Department} from '../../../shared/models/Personnel/Department';
import {EmployeeRequest} from '../../../shared/models/Personnel/EmployeeRequest';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
   employee: EmployeeRequest;
   roles: Role[];
   departments: Department[];
   supervisors: Employee[];

  constructor(private employeeService: EmployeeService, private roleService: RoleService, private departmentService: DepartmentService, private router: Router) {
    this.employee = new EmployeeRequest(0, '', '', '', '', '', 0, 0, '');
  }

  ngOnInit() {
    this.roleService.getRoles().subscribe(
      result => {
        this.roles = result.data;
      },
      error => {
        console.log('error');
      }
    );

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
        this.supervisors = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe(
      response => {
        this.router.navigateByUrl('employeeList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
