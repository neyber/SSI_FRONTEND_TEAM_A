import { Component, OnInit } from '@angular/core';
import {SaClassificationRequest} from '../../../shared/models/saclassification/saClassificationRequest';
import {SaClassificationService} from '../../../shared/services/saClassification/sa-classification.service';

@Component({
  selector: 'app-update-sa-classification-class',
  templateUrl: './update-sa-classification-class.component.html',
  styleUrls: ['./update-sa-classification-class.component.scss']
})
export class UpdateSaClassificationClassComponent implements OnInit {

  public saClassificationId: number;
  public saClassification: SaClassificationRequest;
  constructor(private saClassificationService: SaClassificationService) {
    this.saClassificationId = 0;
    this.saClassification = new SaClassificationRequest('',  0, 0, '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.saClassificationService.updateSaClassification(this.saClassificationId, this.saClassification).subscribe(
      response => {
        console.log('respuesta UPDATE' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
