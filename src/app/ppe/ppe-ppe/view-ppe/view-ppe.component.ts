import { Component, OnInit } from '@angular/core';
import {PpeService} from '../../../shared/services/ppe/ppe.service';
import {Ppe} from '../../../shared/models/ppe/ppe';

@Component({
  selector: 'app-view-ppe',
  templateUrl: './view-ppe.component.html',
  styleUrls: ['./view-ppe.component.scss']
})
export class ViewPpeComponent implements OnInit {

  ppes: Ppe[];

  constructor(private ppeService: PpeService) { }

  ngOnInit() {
    this.loadData();
  }

  deletePpe(ppeId) {
    if (confirm('Are you sure to delete?')) {
      this.ppeService.deletePpe(ppeId).subscribe(res => {
        console.log('Deleted');
        this.loadData();
      });
    }
  }

  loadData() {
    this.ppeService.getPpe().subscribe(
      result => {
        this.ppes = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
