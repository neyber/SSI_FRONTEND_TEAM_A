import { Component, OnInit } from '@angular/core';
import {SaClassification} from '../../../shared/models/saclassification/saClassification';
import {SicknessRequest} from '../../../shared/models/sickness/SicknessRequest';
import {SicknessService} from '../../../shared/services/sickness/sickness.service';
import {SaClassificationService} from '../../../shared/services/saClassification/sa-classification.service';
import {Router} from '@angular/router';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {SaClassificationRequest} from '../../../shared/models/saclassification/saClassificationRequest';
import {EmployeeRequest} from '../../../shared/models/Personnel/EmployeeRequest';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';

@Component({
  selector: 'app-create-sickness',
  templateUrl: './create-sickness.component.html',
  styleUrls: ['./create-sickness.component.scss']
})
export class CreateSicknessComponent implements OnInit {

  public sickness: SicknessRequest;
  saClassification: SaClassificationRequest;
  employees: Employee[];

  constructor(private sicknessService: SicknessService, private employeeService: EmployeeService, private router: Router ) {
    this.sickness = new SicknessRequest('', null, '',  0, 0);
    this.saClassification = new SaClassificationRequest('', 0, 0, '');
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      result => {
        this.employees = result.data;
        console.log('HENRY BC');
        console.log(this.employees);
      },
      error => {
        console.log('error');
      }
    );
  }

  createSicknessEmployee() {
    this.sicknessService.addSickness(this.sickness).subscribe(
      response => {
        this.router.navigateByUrl('sicknessList', {skipLocationChange: true});
      },
      error => {
        console.log('error');
      }
    );
  }

}
