import { Component, OnInit } from '@angular/core';
import {Department} from '../../../shared/models/Personnel/Department';
import {DepartmentService} from '../../../shared/services/Personnel/department.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  department: Department;

  constructor(private departmentService: DepartmentService, private router: Router, private activeRoute: ActivatedRoute) {
    this.department = new Department(0, '', '');
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      const departmentId = params['departmentId'];
      this.departmentService.getDepartmentById(departmentId).subscribe(
        result => {
          this.department = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }

  onSubmit(departmentId) {
    this.departmentService.updateDepartment(departmentId, this.department).subscribe(
      response => {
        this.router.navigateByUrl('departmentList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  };

}
