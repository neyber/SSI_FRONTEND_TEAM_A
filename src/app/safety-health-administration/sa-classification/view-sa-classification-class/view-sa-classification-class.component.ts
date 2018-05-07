import { Component, OnInit } from '@angular/core';
import {SaClassification} from '../../../shared/models/saclassification/saClassification';
import {SaClassificationService} from '../../../shared/services/saClassification/sa-classification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-sa-classification-class',
  templateUrl: './view-sa-classification-class.component.html',
  styleUrls: ['./view-sa-classification-class.component.scss']
})
export class ViewSaClassificationClassComponent implements OnInit {

  saClassifications: SaClassification[];
  constructor(private saClassificationService: SaClassificationService, private router: Router) { }

  ngOnInit() {
    this.saClassificationService.getSaClassification().subscribe(
      result => {
        this.saClassifications = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  deleteSaClassification(saClassificationId) {

    if ( confirm('Are you sure to delete?')) {
      this.saClassificationService.deleteSaClassification(saClassificationId).subscribe(res => {
        console.log('Deleted');
        this.router.navigateByUrl('saClassificationList', { skipLocationChange: true});
      });
    }
  }

}
