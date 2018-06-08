import { Component, OnInit } from '@angular/core';
import {ChartReportRequest} from '../../shared/models/dwhReport/ChartReportRequest';
import {Router} from '@angular/router';
import {AccidentReportService} from '../../shared/services/accidentReport/accident-report.service';

@Component({
  selector: 'app-chart-report',
  templateUrl: './chart-report.component.html',
  styleUrls: ['./chart-report.component.scss']
})
export class ChartReportComponent implements OnInit {

  public chartReport: ChartReportRequest;

  constructor(private accidentReportService: AccidentReportService, private router: Router) {
    this.chartReport = new ChartReportRequest('', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.accidentReportService.getAccidentReportByRangeDate(this.chartReport.fromDate, this.chartReport.toDate).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log('error');
      }
    );
  }

}
