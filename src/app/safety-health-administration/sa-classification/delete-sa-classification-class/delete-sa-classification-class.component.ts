import { Component, OnInit } from '@angular/core';
import {SaClassification} from '../../../shared/models/saclassification/saClassification';
import {SaClassificationService} from '../../../shared/services/saClassification/sa-classification.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-sa-classification-class',
  templateUrl: './delete-sa-classification-class.component.html',
  styleUrls: ['./delete-sa-classification-class.component.scss']
})
export class DeleteSaClassificationClassComponent implements OnInit {

  saClassificationD: SaClassification;
  saClassificationId: number;
  public title: string;
  constructor(private saClassificationService: SaClassificationService) {
    this.saClassificationId = 0;
  }

  ngOnInit() {
  }

  deleteSaClassificationById(id) {
    console.log( 'id to be deleted' + id);
    this.saClassificationService.deleteSaClassification(id).subscribe(
      response => {
        console.log('respuesta post' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
