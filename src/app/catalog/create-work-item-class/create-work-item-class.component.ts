import { Component, OnInit } from '@angular/core';
import { WorkItemClass } from '../../shared/models/workItemClass/WorkItemClass';
import { WorkItemClassService } from '../../shared/services/workItemClass/work-item-class.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-work-item-class',
  templateUrl: './create-work-item-class.component.html',
  styleUrls: ['./create-work-item-class.component.scss']
})
export class CreateWorkItemClassComponent implements OnInit {

  public workItemsC: WorkItemClass;
  constructor( private workItemClassService: WorkItemClassService,
               private _route: ActivatedRoute,
               private _router: Router ) {
   // this.workItemsC = new WorkItemClass('name','description');
    this.workItemsC = new WorkItemClass (0, ' ', ' ');
  }

  ngOnInit() {
  }
  onSubmit() {
      this.workItemClassService.addWorkItemClassification(this.workItemsC).subscribe(
        response => {
            console.log('respuesta post' + response);
          this._router.navigateByUrl('workItemClassificationList', { skipLocationChange: true });
        },
        error => {
          console.log(error);
        }
      );
  }
}
