import { Component, OnInit } from '@angular/core';
import {Employee} from '../../shared/models/Personnel/Employee';
import {EmployeeService} from '../../shared/services/Personnel/employee.service';

@Component({
  selector: 'app-view-report-employee',
  templateUrl: './view-report-employee.component.html',
  styleUrls: ['./view-report-employee.component.scss']
})
export class ViewReportEmployeeComponent implements OnInit {
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

}
