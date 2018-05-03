import { Component, OnInit } from '@angular/core';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {PpeClassificationRequest} from '../../../shared/models/ppeClassification/PpeClassificationRequest';

@Component({
  selector: 'app-update-ppe-classification',
  templateUrl: './update-ppe-classification.component.html',
  styleUrls: ['./update-ppe-classification.component.scss']
})
export class UpdatePpeClassificationComponent implements OnInit {
  public ppeClassificationId: number;
  public ppeClassification: PpeClassificationRequest;

  constructor(private ppeClassificationService: PpeClassificationService) {
    this.ppeClassificationId = 0;
    this.ppeClassification = new PpeClassificationRequest('', '' );
  }

  ngOnInit() {
  }
  onSubmit() {
    this.ppeClassificationService.updatePpeClassification(this.ppeClassificationId, this.ppeClassification).subscribe(
      response => {
        console.log('respuesta UPDATE' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
