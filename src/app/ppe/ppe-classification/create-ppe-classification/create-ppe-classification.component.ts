import { Component, OnInit } from '@angular/core';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PpeClassificationRequest} from '../../../shared/models/ppeClassification/PpeClassificationRequest';

@Component({
  selector: 'app-create-ppe-classification',
  templateUrl: './create-ppe-classification.component.html',
  styleUrls: ['./create-ppe-classification.component.scss']
})
export class CreatePpeClassificationComponent implements OnInit {
  public ppeClassification: PpeClassificationRequest;

  constructor(private ppeClassificationService: PpeClassificationService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.ppeClassification = new PpeClassificationRequest("","");
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log ('A punto de crear' + this.ppeClassification);
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
