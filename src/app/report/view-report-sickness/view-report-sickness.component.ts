import { Component, OnInit } from '@angular/core';
import {SaClassificationService} from '../../shared/services/saClassification/sa-classification.service';
import {SaClassification} from '../../shared/models/saclassification/saClassification';
import {Accidents} from '../../shared/models/saclassification/accidents';

@Component({
  selector: 'app-view-report-sickness',
  templateUrl: './view-report-sickness.component.html'
})
export class ViewReportSicknessComponent implements OnInit {
  accidents: Accidents[];
  constructor(private saClassificationService: SaClassificationService) { }

  ngOnInit() {

    this.saClassificationService.getAllAccidents().subscribe(
      result => {
        this.accidents = result.data;
        //console.log("mi lista de acpuiiites::::::::::::::::::::::"+JSON.stringify(this.accidents));
      },
      error1 => {
        console.log('error');
      }
    );
  }

}
