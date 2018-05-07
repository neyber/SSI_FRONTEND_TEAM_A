import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      result => {
        this.employees = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  deleteEmployee(employeeId) {
    if (confirm('Are you sure to delete?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(res => {
        this.loadData();
      });
    }
  }

  loadData() {
    this.employeeService.getEmployees().subscribe(
      result => {
        this.employees = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
