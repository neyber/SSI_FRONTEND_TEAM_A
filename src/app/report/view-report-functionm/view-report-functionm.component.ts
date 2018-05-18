import { Component, OnInit } from '@angular/core';
import {FunctionManual} from '../../shared/models/functionManual/functionManual';
import {FunctionManualService} from '../../shared/services/functionManual/function-manual.service';

@Component({
  selector: 'app-view-report-functionm',
  templateUrl: './view-report-functionm.component.html'
})
export class ViewReportFunctionmComponent implements OnInit {
  functionManual: FunctionManual[];

  constructor(private manual: FunctionManualService) { }

  ngOnInit() {
      this.manual.getListManual().subscribe(
        result => {
          this.functionManual = result.data;
        },
        error => {
          console.log('error');
        }
      );
  }

}
