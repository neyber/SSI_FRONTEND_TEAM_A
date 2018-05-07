import { Component, OnInit } from '@angular/core';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {PpeClassificationRequest} from '../../../shared/models/ppeClassification/PpeClassificationRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-ppe-classification',
  templateUrl: './create-ppe-classification.component.html',
  styleUrls: ['./create-ppe-classification.component.scss']
})
export class CreatePpeClassificationComponent implements OnInit {
  public ppeClassification: PpeClassificationRequest;

  constructor(private ppeClassificationService: PpeClassificationService, private router: Router) {
    this.ppeClassification = new PpeClassificationRequest('', '' );
  }

  ngOnInit() {
  }

  onSubmit() {
    this.ppeClassificationService.addPpeClassification(this.ppeClassification).subscribe(
      response => {
        this.router.navigateByUrl('ppeClassificationList', { skipLocationChange: true });
        console.log('respuesta POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
