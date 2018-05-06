import { Component, OnInit } from '@angular/core';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-ppe-classification',
  templateUrl: './view-ppe-classification.component.html',
  styleUrls: ['./view-ppe-classification.component.scss']
})
export class ViewPpeClassificationComponent implements OnInit {

  ppeClassifications: PpeClassification[];

  constructor(private ppeClassificationService: PpeClassificationService, private router: Router) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.ppeClassificationService.getPpeClassification().subscribe(
      result => {
        this.ppeClassifications = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  deletePpeClassification(ppeClassificationId) {
    if (confirm('Are you sure to delete?')) {
      this.ppeClassificationService.deletePpeClassification(ppeClassificationId).subscribe(
        res => {
          console.log('Deleted');
          this.loadList();
        },
        error => {
          console.log('error');
        });
    }
  }

}
