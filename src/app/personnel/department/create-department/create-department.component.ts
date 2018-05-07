import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../../shared/services/Personnel/department.service';
import {DepartmentRequest} from '../../../shared/models/Personnel/DepartmentRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  public department: DepartmentRequest;

  constructor(private departmentService: DepartmentService, private router: Router) {
    this.department = new DepartmentRequest('', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.departmentService.addDepartment(this.department).subscribe(
      response => {
        this.router.navigateByUrl('departmentList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
