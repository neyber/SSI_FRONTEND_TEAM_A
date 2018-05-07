import { Component, OnInit } from '@angular/core';
import { WorkItemClass } from '../../shared/models/workItemClass/WorkItemClass';
import { WorkItemClassService } from '../../shared/services/workItemClass/work-item-class.service';
import {ActivatedRoute, Router} from '@angular/router';
import { global } from '../../shared/services/global';

@Component({
  selector: 'app-update-work-item-class',
  templateUrl: './update-work-item-class.component.html',
  styleUrls: ['./update-work-item-class.component.scss']
})
export class UpdateWorkItemClassComponent implements OnInit {

  public workItemsC: WorkItemClass;

  constructor(
    private workItemClassService: WorkItemClassService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit() {

    this.getWorkItemById(global.idAux);
   }

  getWorkItemById(Id) {

    this.workItemClassService.getWorkItemClassById(Id).subscribe(
      result => {
        this.workItemsC = result.data;

      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit() {
    this.workItemClassService.editWorkItem(global.idAux, this.workItemsC).subscribe(
      response => {
        console.log('respuesta UPDATE' + response);
        this._router.navigateByUrl('workItemClassificationList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
  onClick() {
    this._router.navigate(['/catalog/lista']);
  }



}
