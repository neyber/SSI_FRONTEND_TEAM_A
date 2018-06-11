import { Component, OnInit } from '@angular/core';
import { TabularReportRequest } from '../../shared/models/dwhReport/TabularReportRequest';
import { Router } from '@angular/router';
import { AccidentReportService } from '../../shared/services/accidentReport/accident-report.service';

@Component({
  selector: 'app-tabular-report',
  templateUrl: './tabular-report.component.html',
  styleUrls: ['./tabular-report.component.scss']
})
export class TabularReportComponent implements OnInit {

  public tabularReport: TabularReportRequest;
  tabular = [];

  constructor(private accidentReportService: AccidentReportService, private router: Router) {
    this.tabularReport = new TabularReportRequest('', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.accidentReportService.getAccidentReportByRangeDate(this.tabularReport.fromDate, this.tabularReport.toDate).subscribe(
      result => {
        console.log(result);
        
        this.tabular = result.map(result => result);
        
        // let genders = result.map(result => result.gender);
        // let roles = result.map(result => result.role);
        //let quantities = result.map(result => result.quantity);
        // let years = result.map(result => result.year);
        // let months = result.map(result => result.month);
        // let days = result.map(result => result.day);
        //let fullDates = result.map(result => result.fullDate);
      },
      error => {
        console.log('error');
      }
    );
  }

}
