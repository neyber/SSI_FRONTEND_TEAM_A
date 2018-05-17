import {Component, OnInit} from '@angular/core';
import {SicknessService} from '../../../shared/services/sickness/sickness.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {Sickness} from '../../../shared/models/sickness/Sickness';
import {SaCategory} from '../../../shared/models/saclassification/SaCategory';
import {SaType} from '../../../shared/models/saclassification/SaType';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';
import {SaTypeService} from '../../../shared/services/saClassification/sa-type.service';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';

@Component({
  selector: 'app-update-sickness',
  templateUrl: './update-sickness.component.html',
  styleUrls: ['./update-sickness.component.scss']
})
export class UpdateSicknessComponent implements OnInit {

  public sickness: Sickness;
  saCategories: SaCategory[];
  saTypes: SaType[];
  employees: Employee[];

  constructor(private sicknessService: SicknessService, private saCategoryService: SaCategoryService, private saTypeService: SaTypeService, private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.sickness = new Sickness(0, '', '',  '', 0, 0, 0, 0, 0);

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const sicknessId = params['sicknessId'];
      this.sicknessService.getSicknessById(sicknessId).subscribe(
        result => {
          this.sickness = result.data;
          this.sickness.saCategoryId = result.data.saCategoryResponse.saCategoryId;
          this.sickness.saTypeId = result.data.saTypeResponse.saTypeId;
          this.sickness.employeeId = result.data.employee.employeeId;
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
  onSubmit(sicknessId) {
    this.sicknessService.updateSickness(sicknessId, this.sickness).subscribe(
      response => {
        this.router.navigateByUrl('sicknessList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
