import { Component, OnInit } from '@angular/core';
import {WorkItem} from '../../../shared/models/workItem/workItem';
import {Router} from '@angular/router';
import {WorkItemService} from '../../../shared/services/workItem/work-item.service';

@Component({
  selector: 'app-view-work-item',
  templateUrl: './view-work-item.component.html',
  styleUrls: ['./view-work-item.component.scss']
})
export class ViewWorkItemComponent implements OnInit {

  workItems: WorkItem[];

  constructor(private workItemService: WorkItemService, private router: Router) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.workItemService.getWorkItems().subscribe(
      result => {
        this.workItems = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  deleteWorkItem(workItemId) {
    if (confirm('Are you sure to delete?')) {
      this.workItemService.deleteWorkItem(workItemId).subscribe(
        res => {
          console.log('Deleted');
          this.loadList();
        },
        error => {
          console.log('error');
        });
    }
  }

}
