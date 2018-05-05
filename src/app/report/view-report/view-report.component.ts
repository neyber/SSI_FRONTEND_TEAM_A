import { Component, OnInit } from '@angular/core';
import {PpeService} from '../../shared/services/ppe/ppe.service';
import {Ppe} from '../../shared/models/ppe/ppe';


@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html'
})
export class ViewReportComponent implements OnInit {
  ppes: Ppe[];
  constructor( private ppeService: PpeService) { }

  ngOnInit() {
    this.ppeService.getPpe().subscribe(
      result => {
        this.ppes = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
