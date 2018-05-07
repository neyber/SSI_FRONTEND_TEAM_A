import { Component, OnInit } from '@angular/core';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {WorkItemRequest} from '../../../shared/models/workItem/WorkItemRequest';
import {WorkItemService} from '../../../shared/services/workItem/work-item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkItemClassService} from '../../../shared/services/workItemClass/work-item-class.service';

@Component({
  selector: 'app-update-work-item',
  templateUrl: './update-work-item.component.html',
  styleUrls: ['./update-work-item.component.scss']
})
export class UpdateWorkItemComponent implements OnInit {

  public workItem: WorkItemRequest;
  workItemClassifications: PpeClassification[];

  constructor(private workItemService: WorkItemService, private workItemClassificationService: WorkItemClassService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.workItem = new WorkItemRequest('', '', 0 ); }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let workItemId = params['workItemId'];
      this.workItemService.getWorkItemById(workItemId).subscribe(
        result => {
          this.workItem = result.data;
          this.workItem.workItemClassificationId = result.data.workItemClassification.workItemClassificationId;
        },
        error => {
          console.log('error');
        }
      );

      this.workItemClassificationService.getWorkItemClassification().subscribe(
        result => {
          this.workItemClassifications = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }

  onSubmit(workItemId) {
    this.workItemService.updateWorkItem(workItemId, this.workItem).subscribe(
      response => {
        this.router.navigateByUrl('workItemList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
