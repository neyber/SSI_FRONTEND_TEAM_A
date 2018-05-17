import {Component, OnInit} from '@angular/core';
import {Accident} from '../../../shared/models/accident/accident';
import {AccidentService} from '../../../shared/services/accident/accident.service';

@Component({
  selector: 'app-view-accident',
  templateUrl: './view-accident.component.html',
  styleUrls: ['./view-accident.component.scss']
})
export class ViewAccidentComponent implements OnInit {

  accidents: Accident[];

  constructor(private accidentService: AccidentService) { }

  ngOnInit() {
    this.loadData();
  }

  deleteAccidentEmployee(accidentId) {
    if (confirm('Are you sure to delete this accident record?')) {
      this.accidentService.deleteAccident(accidentId).subscribe(response => {
        this.loadData();
      });
    }
  }

  loadData() {
    this.accidentService.getAccident().subscribe(
      result => {
        this.accidents = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
