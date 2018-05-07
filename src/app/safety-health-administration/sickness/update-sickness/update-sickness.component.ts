import { Component, OnInit } from '@angular/core';
import {SicknessRequest} from '../../../shared/models/sickness/SicknessRequest';
import {Sickness} from '../../../shared/models/sickness/Sickness';
import {Employee} from '../../../shared/models/Personnel/Employee';
import {SicknessService} from '../../../shared/services/sickness/sickness.service';
import {SaClassification} from '../../../shared/models/saclassification/saClassification';
import {SaClassificationService} from '../../../shared/services/saClassification/sa-classification.service';
import {EmployeeService} from '../../../shared/services/Personnel/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SaClassificationRequest} from '../../../shared/models/saclassification/saClassificationRequest';
import {EmployeeRequest} from '../../../shared/models/Personnel/EmployeeRequest';

@Component({
  selector: 'app-update-sickness',
  templateUrl: './update-sickness.component.html',
  styleUrls: ['./update-sickness.component.scss']
})
export class UpdateSicknessComponent implements OnInit {

  public sickness: SicknessRequest;

  constructor(private sicknessService: SicknessService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.sickness = new SicknessRequest('', '', '',  0, 0);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let sicknessId = params['sicknessId'];
      this.sicknessService.getSicknessById(sicknessId).subscribe(
        result => {
          this.sickness = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }
  onSubmit(sicknessId) {

    this.sicknessService.updateSickness(sicknessId, this.sickness).subscribe(
      result => {
        this.router.navigateByUrl('sicknessList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
