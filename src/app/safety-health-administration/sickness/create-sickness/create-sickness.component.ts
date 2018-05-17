import {Component, OnInit} from '@angular/core';
import {SicknessRequest} from '../../../shared/models/sickness/SicknessRequest';
import {SicknessService} from '../../../shared/services/sickness/sickness.service';
import {Router} from '@angular/router';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';
import {SaCategory} from '../../../shared/models/saclassification/SaCategory';
import {SaType} from '../../../shared/models/saclassification/SaType';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';
import {SaTypeService} from '../../../shared/services/saClassification/sa-type.service';

@Component({
  selector: 'app-create-sickness',
  templateUrl: './create-sickness.component.html',
  styleUrls: ['./create-sickness.component.scss']
})
export class CreateSicknessComponent implements OnInit {

  public sickness: SicknessRequest;
  saCategories: SaCategory[];
  saTypes: SaType[];
  employees: Employee[];

  constructor(private sicknessService: SicknessService, private saCategoryService: SaCategoryService, private saTypeService: SaTypeService, private employeeService: EmployeeService, private router: Router ) {
    this.sickness = new SicknessRequest('', null, '',  0, 0, 0, 0, 0);
  }

  ngOnInit() {
    this.saCategoryService.getSaCategories().subscribe(
        result => {
          this.saCategories = result.data;
        },
          error => {
          console.log('error');
        }
    );

    this.saTypeService.getSaTypes().subscribe(
      result => {
        this.saTypes = result.data;
      },
      error => {
        console.log('error');
      }
    )

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
    this.sicknessService.addSickness(this.sickness).subscribe(
      response => {
        this.router.navigateByUrl('sicknessList', {skipLocationChange: true});
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
