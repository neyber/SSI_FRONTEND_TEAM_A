import { Component, OnInit } from '@angular/core';
import {FunctionManual} from '../../shared/models/functionManual/functionManual';
import {FunctionManualService} from '../../shared/services/functionManual/function-manual.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-manual',
  templateUrl: './view-manual.component.html',
  styleUrls: ['./view-manual.component.scss']
})
export class ViewManualComponent implements OnInit {
  functionManual: FunctionManual[];

  constructor(private ManualService: FunctionManualService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }
  deleteManual(functionManualId) {
    if (confirm('Are you sure to delete?')) {
      this.ManualService.deleteManual(functionManualId).subscribe(
        res => {
          console.log('Deleted');
          this.loadData();
        });
    }
  }
  loadData() {
    this.ManualService.getListManual().subscribe(
      result => {
        this.functionManual = result.data;
        console.log(this.functionManual);
      },
      error => {
        console.log('error');
      }
    );
  }

}
