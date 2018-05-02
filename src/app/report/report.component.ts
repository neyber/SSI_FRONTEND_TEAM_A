import { Component, OnInit } from '@angular/core';
import { WorkItem } from '../shared/models/workItem';
import { ReportService } from '../shared/services/report.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  workItems: WorkItem[];
  public title: string;

  constructor(private router: Router,  private reportService: ReportService) {

    this.reportService.getReport().subscribe(
      data => console.log(this.workItems = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );


  }

  ngOnInit() {



  }

}
