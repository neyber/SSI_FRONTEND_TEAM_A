import { Component, OnInit } from '@angular/core';
import {ExistingPpeAssignedRequest} from '../../../shared/models/existingPpeAssigned/ExistingPpeAssignedRequest';
import {ExistingPpe} from '../../../shared/models/existingPpe/existingPpe';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';
import {ExistingPpeAssignedService} from '../../../shared/services/existingPpeAssigned/existing-ppe-assigned.service';
import {ExistingPpeService} from '../../../shared/services/existingPpe/existing-ppe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-existing-ppe-assigned',
  templateUrl: './update-existing-ppe-assigned.component.html',
  styleUrls: ['./update-existing-ppe-assigned.component.scss']
})
export class UpdateExistingPpeAssignedComponent implements OnInit {

  public existingPpeAssigned: ExistingPpeAssignedRequest;
  existingPpes: ExistingPpe[];
  employees: Employee[];

  constructor(private existingPpeAssignedService: ExistingPpeAssignedService, private existingPpeService: ExistingPpeService,
              private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.existingPpeAssigned = new ExistingPpeAssignedRequest('', '', '', '', 0, 0 );
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let existingPpeAssignedId = params['existingPpeAssignedId'];
      this.existingPpeAssignedService.getExistingPpeAssignedById(existingPpeAssignedId).subscribe(
        result => {
          this.existingPpeAssigned = result.data;
          this.existingPpeAssigned.employeeId =  result.data.employee.employeeId;
          this.existingPpeAssigned.existingPpeId =  result.data.existingPpe.existingPpeId;
        },
        error => {
          console.log('error');
        }
      );

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

    });
  }

  onSubmit(existingPpeAssignedId) {

    this.existingPpeAssignedService.updateExistingPpeAssigned(existingPpeAssignedId, this.existingPpeAssigned).subscribe(
      response => {
        this.router.navigateByUrl('existingPpeAssignedList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
