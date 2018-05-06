import { Component, OnInit } from '@angular/core';
import {ExistingPpeAssigned} from '../../../shared/models/existingPpeAssigned/existingPpeAssigned';
import {ExistingPpeAssignedService} from '../../../shared/services/existingPpeAssigned/existing-ppe-assigned.service';
import {DatePipe} from '@angular/common';
import {ExistingPpeAssignedRequest} from '../../../shared/models/existingPpeAssigned/ExistingPpeAssignedRequest';
import {ExistingPpeRequest} from '../../../shared/models/existingPpe/ExistingPpeRequest';

@Component({
  selector: 'app-view-existing-ppe-assigned',
  templateUrl: './view-existing-ppe-assigned.component.html',
  styleUrls: ['./view-existing-ppe-assigned.component.scss']
})
export class ViewExistingPpeAssignedComponent implements OnInit {

  existingPpeAssigneds: ExistingPpeAssigned[];
  existingPpeAssigned: ExistingPpeAssignedRequest;

  constructor(private existingPpeAssignedService: ExistingPpeAssignedService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.loadData();
  }

  returnExistingPpe(existingPpeAssignedId) {
    if (confirm('Are you sure to return the PPE?')) {
      this.existingPpeAssignedService.getExistingPpeAssignedById(existingPpeAssignedId).subscribe(
        result => {
          console.log(result.data);
          this.existingPpeAssigned = new ExistingPpeAssignedRequest('', '', '', '', 0, 0 );

          this.existingPpeAssigned.assignedDate = result.data.assignedDate;
          this.existingPpeAssigned.assignedNotes = result.data.assignedNotes;
          this.existingPpeAssigned.returnDate = this.datepipe.transform(Date.now(), 'yyyy-MM-dd');
          this.existingPpeAssigned.returnNotes = result.data.returnNotes;
          this.existingPpeAssigned.existingPpeId = result.data.existingPpe.existingPpeId;
          this.existingPpeAssigned.employeeId = result.data.employee.employeeId;

          this.existingPpeAssignedService.updateExistingPpeAssigned(existingPpeAssignedId, this.existingPpeAssigned).subscribe(res => {
            console.log('Updated');
            this.loadData();
          });
        },
        error => {
          console.log('error');
        }
      );
    }
  }

  loadData() {
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
