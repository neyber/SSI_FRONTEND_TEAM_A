import {Component, OnInit} from '@angular/core';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';
import {SaType} from '../../../shared/models/saclassification/SaType';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';
import {SaTypeService} from '../../../shared/services/saClassification/sa-type.service';
import {SaCategory} from '../../../shared/models/saclassification/SaCategory';
import {ActivatedRoute, Router} from '@angular/router';
import {Accident} from '../../../shared/models/accident/accident';
import {AccidentService} from '../../../shared/services/accident/accident.service';

@Component({
  selector: 'app-update-accident',
  templateUrl: './update-accident.component.html',
  styleUrls: ['./update-accident.component.scss']
})
export class UpdateAccidentComponent implements OnInit {

  public accident: Accident;
  saCategories: SaCategory[];
  saTypes: SaType[];
  employees: Employee[];

  constructor(private accidentService: AccidentService, private saCategoryService: SaCategoryService, private saTypeService: SaTypeService, private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.accident = new Accident(0, '', '',  '', 0, 0, 0, 0, 0);

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const accidentId = params['accidentId'];
      this.accidentService.getAccidentById(accidentId).subscribe(
        result => {
          this.accident = result.data;
          this.accident.saCategoryId = result.data.saCategoryResponse.saCategoryId;
          this.accident.saTypeId = result.data.saTypeResponse.saTypeId;
          this.accident.employeeId = result.data.employee.employeeId;
        },
        error => {
          console.log('error');
        }
      );

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
  onSubmit(accidentId) {
    this.accidentService.updateAccident(accidentId, this.accident).subscribe(
      response => {
        this.router.navigateByUrl('accidentList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
