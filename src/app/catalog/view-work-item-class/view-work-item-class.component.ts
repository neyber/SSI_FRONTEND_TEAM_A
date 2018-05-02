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

    this.workItemClassService.getWorkItemClassification().subscribe(
      data => console.log(this.workItemsC = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );


  }

  ngOnInit() {
  }

}
