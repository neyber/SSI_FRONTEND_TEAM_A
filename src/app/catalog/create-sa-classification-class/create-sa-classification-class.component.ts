import { Component, OnInit } from '@angular/core';
import {SaClassificationRequest} from '../../shared/models/saclassification/saClassificationRequest';
import {SaClassificationService} from '../../shared/services/saClassification/sa-classification.service';

@Component({
  selector: 'app-create-sa-classification-class',
  templateUrl: './create-sa-classification-class.component.html',
  styleUrls: ['./create-sa-classification-class.component.scss']
})
export class CreateSaClassificationClassComponent implements OnInit {

  public saClassification: SaClassificationRequest;
  constructor(private saClassificationService: SaClassificationService) {
    this.saClassification = new SaClassificationRequest('', 0, 0, '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.saClassificationService.addSaClassification(this.saClassification).subscribe(
      response => {
        console.log('response POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
