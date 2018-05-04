import { Component, OnInit } from '@angular/core';
import { WorkItemClass } from '../../shared/models/workItemClass/WorkItemClass';
import { WorkItemClassService } from '../../shared/services/workItemClass/work-item-class.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  ) { }

  ngOnInit() {
    this.getWorkItemById(1);
   }
  getWorkItemById(Id){

    this.workItemClassService.getWorkItemClassById(Id).subscribe(
      result =>{
        this.workItemsC = result.data;
        console.log("este es el valor de work item por id" + this.workItemsC);
      },
      error =>{
        console.log("error");
      }
    )
  }

  onSubmit() {  //addWorkItemClassification
    this.workItemClassService.addWorkItemClassification(this.workItemsC).subscribe(
      response => {
        console.log('respuesta post' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
