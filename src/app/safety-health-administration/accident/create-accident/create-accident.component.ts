import {Component, OnInit} from '@angular/core';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';
import {SaType} from '../../../shared/models/saclassification/SaType';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';
import {SaTypeService} from '../../../shared/services/saClassification/sa-type.service';
import {SaCategory} from '../../../shared/models/saclassification/SaCategory';
import {Router} from '@angular/router';
import {AccidentRequest} from '../../../shared/models/accident/AccidentRequest';
import {AccidentService} from '../../../shared/services/accident/accident.service';

@Component({
  selector: 'app-create-accident',
  templateUrl: './create-accident.component.html',
  styleUrls: ['./create-accident.component.scss']
})
export class CreateAccidentComponent implements OnInit {

  public accident: AccidentRequest;
  saCategories: SaCategory[];
  saTypes: SaType[];
  employees: Employee[];

  constructor(private accidentService: AccidentService, private saCategoryService: SaCategoryService, private saTypeService: SaTypeService, private employeeService: EmployeeService, private router: Router ) {
    this.accident = new AccidentRequest('', null, '',  0, 0, 0, 0, 0);
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
    this.accidentService.addAccident(this.accident).subscribe(
      response => {
        this.router.navigateByUrl('accidentList', {skipLocationChange: true});
      },
      error => {
        console.log('error');
      }
    );
  }

  createAccidentEmployee() {
    this.accidentService.addAccident(this.accident).subscribe(
      response => {
        this.router.navigateByUrl('accidentList', {skipLocationChange: true});
      },
      error => {
        console.log('error');
      }
    );
  }

}
