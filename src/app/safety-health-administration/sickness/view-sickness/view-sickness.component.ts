import {Component, OnInit} from '@angular/core';
import {Sickness} from '../../../shared/models/sickness/Sickness';
import {SicknessService} from '../../../shared/services/sickness/sickness.service';

@Component({
  selector: 'app-view-sickness',
  templateUrl: './view-sickness.component.html',
  styleUrls: ['./view-sickness.component.scss']
})
export class ViewSicknessComponent implements OnInit {

  diseases: Sickness[];

  constructor(private sicknessService: SicknessService) { }

  ngOnInit() {
    this.loadData();
  }

  deleteSicknessEmployee(sicknessId) {
    if (confirm('Are you sure to delete this sickness record?')) {
      this.sicknessService.deleteSickness(sicknessId).subscribe(response => {
          this.loadData();
        });
    }
  }

  loadData() {
    this.sicknessService.getSickness().subscribe(
      result => {
        this.diseases = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
