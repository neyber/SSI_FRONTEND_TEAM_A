import {Component, OnInit} from '@angular/core';
import {SaType} from '../../../shared/models/saclassification/SaType';
import {SaTypeService} from '../../../shared/services/saClassification/sa-type.service';

@Component({
  selector: 'app-sa-type',
  templateUrl: './sa-type.component.html',
  styleUrls: ['./sa-type.component.scss']
})
export class SaTypeComponent implements OnInit {
  saTypes: SaType[];

  constructor(private saTypeService: SaTypeService) { }

  ngOnInit() {
    this.loadData();
  }

  deleteSaType(saTypeId) {
    if (confirm('Are you sure to delete this Category record?')) {
      this.saTypeService.deleteSaType(saTypeId).subscribe(response => {
        this.loadData();
      });
    }
  }

  loadData() {
    this.saTypeService.getSaTypes().subscribe(
      result => {
        this.saTypes = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
