import { Component, OnInit } from '@angular/core';
import {ChartReportRequest} from '../../shared/models/dwhReport/ChartReportRequest';
import {Router} from '@angular/router';
import {AccidentReportService} from '../../shared/services/accidentReport/accident-report.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-report',
  templateUrl: './chart-report.component.html',
  styleUrls: ['./chart-report.component.scss']
})
export class ChartReportComponent implements OnInit {

  public chartReport: ChartReportRequest;
  chart = [];

  constructor(private accidentReportService: AccidentReportService, private router: Router) {
    this.chartReport = new ChartReportRequest('', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.accidentReportService.getAccidentReportByRangeDate(this.chartReport.fromDate, this.chartReport.toDate).subscribe(
      result => {
        console.log(result);
        // let fullNames = result.map(result => result.fullName);
        // let genders = result.map(result => result.gender);
        // let roles = result.map(result => result.role);
        let quantities = result.map(result => result.quantity);
        // let years = result.map(result => result.year);
        // let months = result.map(result => result.month);
        // let days = result.map(result => result.day);
        let fullDates = result.map(result => result.fullDate);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: fullDates,
            datasets: [
              {
                data: quantities,
                borderColor: '#3cba9f',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      },
      error => {
        console.log('error');
      }
    );
  }

}
