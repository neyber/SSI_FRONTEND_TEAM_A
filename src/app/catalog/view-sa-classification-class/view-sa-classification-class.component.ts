import { Component, OnInit } from '@angular/core';
import {SaClassification} from '../../shared/models/saclassification/saClassification';
import {SaClassificationService} from '../../shared/services/saClassification/sa-classification.service';

@Component({
  selector: 'app-view-sa-classification-class',
  templateUrl: './view-sa-classification-class.component.html',
  styleUrls: ['./view-sa-classification-class.component.scss']
})
export class ViewSaClassificationClassComponent implements OnInit {

  saClassifications: SaClassification[];
  constructor(private saClassificationService: SaClassificationService) { }

  ngOnInit() {
    this.saClassificationService.getSaClassification().subscribe(
      result => {
        this.saClassifications = result.data;
      },
      error1 => {
        console.log('error');
      }
    );
  }

}
