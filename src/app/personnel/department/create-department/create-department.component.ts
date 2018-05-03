import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../../shared/services/Personnel/department.service';
import {DepartmentRequest} from '../../../shared/models/Personnel/DepartmentRequest';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  public department: DepartmentRequest;

  constructor(private departmentService: DepartmentService) {
    this.department = new DepartmentRequest('', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.departmentService.addDepartment(this.department).subscribe(
      response => {
        console.log('respuesta POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
