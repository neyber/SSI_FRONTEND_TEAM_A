import { Component, OnInit } from '@angular/core';
import {ExistingPpe} from '../../../shared/models/existingPpe/existingPpe';
import {ExistingPpeAssignedRequest} from '../../../shared/models/existingPpeAssigned/ExistingPpeAssignedRequest';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {ExistingPpeService} from '../../../shared/services/existingPpe/existing-ppe.service';
import {Router} from '@angular/router';
import {ExistingPpeAssignedService} from '../../../shared/services/existingPpeAssigned/existing-ppe-assigned.service';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-create-existing-ppe-assigned',
  templateUrl: './create-existing-ppe-assigned.component.html',
  styleUrls: ['./create-existing-ppe-assigned.component.scss']
})
export class CreateExistingPpeAssignedComponent implements OnInit {

  public existingPpeAssigned: ExistingPpeAssignedRequest;
  existingPpes: ExistingPpe[];
  employees: Employee[];

  constructor(private existingPpeAssignedService: ExistingPpeAssignedService, private existingPpeService: ExistingPpeService,
              private employeeService: EmployeeService, private router: Router, public datepipe: DatePipe) {
    this.existingPpeAssigned = new ExistingPpeAssignedRequest('', this.datepipe.transform(Date.now(), 'yyyy-MM-dd'), '', '', 0, 0 );
  }

  ngOnInit() {
    this.existingPpeService.getExistingPpe().subscribe(
      result => {
        this.existingPpes = result.data;
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
    );
  }

  onSubmit() {
    this.existingPpeAssignedService.addExistingPpeAssigned(this.existingPpeAssigned).subscribe(
      response => {
        this.router.navigateByUrl('existingPpeAssignedList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
