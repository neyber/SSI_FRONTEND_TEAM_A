import {Component, OnInit} from '@angular/core';
import {SaClassificationService} from '../../shared/services/saClassification/sa-classification.service';
import {Accident} from '../../shared/models/accident/accident';

@Component({
  selector: 'app-view-report-sickness',
  templateUrl: './view-report-sickness.component.html'
})
export class ViewReportSicknessComponent implements OnInit {
  accidents: Accident[];
  constructor(private saClassificationService: SaClassificationService) { }

  ngOnInit() {

    this.saClassificationService.getAllAccidents().subscribe(
      result => {
        this.accidents = result.data;
      },
      error1 => {
        console.log('error');
      }
    );
  }

}
