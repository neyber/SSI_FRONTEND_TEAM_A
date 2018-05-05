import { Component, OnInit } from '@angular/core';
import {Ppe} from 'app/shared/models/ppe/ppe';
import {PpeService} from '../../../shared/services/ppe/ppe.service';

@Component({
  selector: 'app-view-ppe',
  templateUrl: './view-ppe.component.html',
  styleUrls: ['./view-ppe.component.scss']
})
export class ViewPpeComponent implements OnInit {

  ppes: Ppe[];

  constructor(private ppeService: PpeService) { }

  ngOnInit() {
    this.ppeService.getPpe().subscribe(
      result => {
        this.ppes = result.data;
        console.log(this.ppes);
      },
      error => {
        console.log('error');
      }
    );
  }

}
