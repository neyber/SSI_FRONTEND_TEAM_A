import { Component, OnInit } from '@angular/core';
import {ExistingPpe} from '../../../shared/models/existingPpe/existingPpe';
import {ExistingPpeService} from '../../../shared/services/existingPpe/existing-ppe.service';

@Component({
  selector: 'app-view-existing-ppe',
  templateUrl: './view-existing-ppe.component.html',
  styleUrls: ['./view-existing-ppe.component.scss']
})
export class ViewExistingPpeComponent implements OnInit {

  existingPpes: ExistingPpe[];

  constructor(private existingPpeService: ExistingPpeService) { }

  ngOnInit() {
    this.loadData();
  }

  deleteExistingPpe(existingPpeId) {
    if (confirm('Are you sure to delete?')) {
      this.existingPpeService.deleteExistingPpe(existingPpeId).subscribe(res => {
        console.log('Deleted');
        this.loadData();
      });
    }
  }

  loadData() {
    this.existingPpeService.getExistingPpe().subscribe(
      result => {
        this.existingPpes = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }
}
