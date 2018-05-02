import { Component, OnInit } from '@angular/core';
import { WorkItemClass } from '../../shared/models/workItemClass/WorkItemClass';
import { WorkItemClassService } from '../../shared/services/workItemClass/work-item-class.service';



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
    this.workItemClassService.getWorkItemClassification().subscribe(
      result =>{
            this.workItemsC = result.data;
        console.log("workItems:::::::::::::"+ JSON.stringify(result))
      },
      error =>{
        console.log("error");
      }
    )

  }

}
