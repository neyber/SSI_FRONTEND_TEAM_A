import { Component, OnInit } from '@angular/core';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {PpeClassificationRequest} from '../../../shared/models/ppeClassification/PpeClassificationRequest';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-ppe-classification',
  templateUrl: './update-ppe-classification.component.html',
  styleUrls: ['./update-ppe-classification.component.scss']
})
export class UpdatePpeClassificationComponent implements OnInit {
  public ppeClassification: PpeClassificationRequest;

  constructor(private ppeClassificationService: PpeClassificationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.ppeClassification = new PpeClassificationRequest('', '' );
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let ppeClassificationId = params['ppeClassificationId'];
      this.ppeClassificationService.getPpeClassificationById(ppeClassificationId).subscribe(
        result => {
          this.ppeClassification = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }

  onSubmit(ppeClassificationId) {
    this.ppeClassificationService.updatePpeClassification(ppeClassificationId, this.ppeClassification).subscribe(
      response => {
        console.log('respuesta UPDATE' + response);
        this.router.navigateByUrl('ppeClassificationList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
