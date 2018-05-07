import { Component, OnInit } from '@angular/core';
import {Department} from '../../../shared/models/Personnel/Department';
import {DepartmentService} from '../../../shared/services/Personnel/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent implements OnInit {
  departments: Department[];

  constructor(private departmentService: DepartmentService, private router: Router) { }

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

  deleteDepartment(departmentId) {
    if(confirm('Are you sure to delete?')) {
      this.departmentService.deleteDepartment(departmentId).subscribe(res => {
        this.loadData();
      });
    }
  }

  loadData() {
    this.departmentService.getDepartments().subscribe(
      result => {
        this.departments = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
