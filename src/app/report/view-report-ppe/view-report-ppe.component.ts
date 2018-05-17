import { Component, OnInit } from '@angular/core';
import {ExistingPpe} from '../../shared/models/existingPpe/existingPpe';
import {ExistingPpeService} from '../../shared/services/existingPpe/existing-ppe.service';
import {ExistingPpeAssigned} from '../../shared/models/existingPpeAssigned/existingPpeAssigned';
import {ExistingPpeAssignedService} from '../../shared/services/existingPpeAssigned/existing-ppe-assigned.service';

@Component({
  selector: 'app-view-report-ppe',
  templateUrl: './view-report-ppe.component.html',
  styleUrls: ['./view-report-ppe.component.scss']
})
export class ViewReportPpeComponent implements OnInit {
  existingPpes: ExistingPpe[];
  existingPpeAssigneds: ExistingPpeAssigned[];

  constructor(private existingPpeService: ExistingPpeService, private existingPpeAssignedService: ExistingPpeAssignedService) { }

  ngOnInit() {
    this.loadPPEData();
    this.loadAssignPPEData();
  }

  loadPPEData() {
    this.existingPpeService.getExistingPpe().subscribe(
      result => {
        this.existingPpes = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }
  loadAssignPPEData() {
    this.existingPpeAssignedService.getExistingPpeAssigned().subscribe(
      result => {
        this.existingPpeAssigneds = result.data;
        console.log(this.existingPpeAssigneds);
      },
      error => {
        console.log('error');
      }
    );
  }

}
