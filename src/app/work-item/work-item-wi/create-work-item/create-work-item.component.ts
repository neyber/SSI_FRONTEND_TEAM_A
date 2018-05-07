import { Component, OnInit } from '@angular/core';
import {PpeClassificationRequest} from '../../../shared/models/ppeClassification/PpeClassificationRequest';
import {Router} from '@angular/router';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {WorkItemRequest} from '../../../shared/models/workItem/WorkItemRequest';
import {WorkItemService} from '../../../shared/services/workItem/work-item.service';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {WorkItemClassService} from '../../../shared/services/workItemClass/work-item-class.service';

@Component({
  selector: 'app-create-work-item',
  templateUrl: './create-work-item.component.html',
  styleUrls: ['./create-work-item.component.scss']
})
export class CreateWorkItemComponent implements OnInit {
  public workItem: WorkItemRequest;
  workItemClassifications: PpeClassification[];

  constructor(private workItemService: WorkItemService, private workItemClassificationService: WorkItemClassService, private router: Router) {
    this.workItem = new WorkItemRequest('', '', 0 ); }

  ngOnInit() {
    this.workItemClassificationService.getWorkItemClassification().subscribe(
      result => {
        this.workItemClassifications = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit() {
    this.workItemService.addWorkItem(this.workItem).subscribe(
      response => {
        this.router.navigateByUrl('workItemList', { skipLocationChange: true });
        console.log('respuesta POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
