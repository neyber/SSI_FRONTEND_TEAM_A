import { Component, OnInit } from '@angular/core';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {PpeClassificationRequest} from '../../../shared/models/ppeClassification/PpeClassificationRequest';

@Component({
  selector: 'app-create-ppe-classification',
  templateUrl: './create-ppe-classification.component.html',
  styleUrls: ['./create-ppe-classification.component.scss']
})
export class CreatePpeClassificationComponent implements OnInit {
  public ppeClassification: PpeClassificationRequest;

  constructor(private ppeClassificationService: PpeClassificationService) {
    this.ppeClassification = new PpeClassificationRequest('', '' );
  }

  ngOnInit() {
  }

  onSubmit() {
    this.ppeClassificationService.addPpeClassification(this.ppeClassification).subscribe(
      response => {
        console.log('respuesta POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
