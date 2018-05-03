import { Component, OnInit } from '@angular/core';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';

@Component({
  selector: 'app-view-ppe-classification',
  templateUrl: './view-ppe-classification.component.html',
  styleUrls: ['./view-ppe-classification.component.scss']
})
export class ViewPpeClassificationComponent implements OnInit {

  ppeClassifications: PpeClassification[];
  public title: string;

  constructor(private ppeClassificationService: PpeClassificationService) { }

  ngOnInit() {
    this.ppeClassificationService.getPpeClassification().subscribe(
      result => {
        this.ppeClassifications = result.data;
        console.log('PPE Classifications:::::::::::::' + JSON.stringify(result));
      },
      error => {
        console.log('error');
      }
    );
  }
}
