import { Component, OnInit } from '@angular/core';
import {Department} from '../../../shared/models/Personnel/Department';
import {DepartmentService} from '../../../shared/services/Personnel/department.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent implements OnInit {
  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      result => {
        this.departments = result.data;
        console.log('Departments:' + JSON.stringify(result));
      },
      error => {
        console.log('error');
      }
    );
  }

}
