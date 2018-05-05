import { Component, OnInit } from '@angular/core';
import { WorkItemClass } from '../../shared/models/workItemClass/WorkItemClass';
import { WorkItemClassService } from '../../shared/services/workItemClass/work-item-class.service';
import { global } from '../../shared/services/global';
import {UpdateWorkItemClassComponent} from '../update-work-item-class/update-work-item-class.component';



@Component({
  selector: 'app-view-work-item-class',
  templateUrl: './view-work-item-class.component.html',
  styleUrls: ['./view-work-item-class.component.scss']
})
export class ViewWorkItemClassComponent implements OnInit {
  workItemsC: WorkItemClass[];
  public title: string;
  constructor(private workItemClassService: WorkItemClassService) {

  }

  ngOnInit() {


  this.getWorkItem();


  }

  onClick(id){

    console.log("onclick y el id"+id);
    this.getWorkItemById(id);

    global.idAux = id;
  }

  getWorkItem(){

    this.workItemClassService.getWorkItemClassification().subscribe(
      result =>{
        this.workItemsC = result.data;
      },
      error =>{
        console.log("error");
      }
    )
  }

  getWorkItemById(Id){

    this.workItemClassService.getWorkItemClassById(Id).subscribe(
      result =>{
        this.workItemsC = result.data;
        console.log("este es el valor de work item por id" + JSON.stringify(this.workItemsC));
      },
      error =>{
        console.log("error");
      }
    )
  }
}
