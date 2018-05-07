import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {Department} from '../../../shared/models/Personnel/Department';
import {Role} from '../../../shared/models/Personnel/Role';
import {RoleService} from '../../../shared/services/Personnel/role.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../../../shared/services/Personnel/department.service';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee;
  roles: Role[];
  departments: Department[];
  supervisors: Employee[];


  constructor(private employeeService: EmployeeService, private roleService: RoleService, private departmentService: DepartmentService, private router: Router, private activeRouter: ActivatedRoute) {
    this.employee = new Employee(0,  0, '',  '', '', '', '', 0, 0, '');
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params => {
      const employeeId = params['employeeId'];
      this.employeeService.getEmployeeById(employeeId).subscribe(
        result => {
          this.employee = result.data;
          this.employee.roleId = result.data.roleEmployee.roleId;
          this.employee.departmentId = result.data.departmentEmployee.departmentId;
        },
        error => {
          console.log('error');
        }
      );

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
  });
  }

  onSubmit(employeeId) {
    this.employeeService.updateEmployee(employeeId, this.employee).subscribe(
      response => {
        this.router.navigateByUrl('employeeList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
