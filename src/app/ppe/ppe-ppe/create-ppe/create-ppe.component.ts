import { Component, OnInit } from '@angular/core';
import {PpeRequest} from '../../../shared/models/ppe/PpeRequest';
import {PpeService} from '../../../shared/services/ppe/ppe.service';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';

@Component({
  selector: 'app-create-ppe',
  templateUrl: './create-ppe.component.html',
  styleUrls: ['./create-ppe.component.scss']
})
export class CreatePpeComponent implements OnInit {
  public ppe: PpeRequest;
  ppeClassifications: PpeClassification[];

  constructor(private ppeService: PpeService, private ppeClassificationService: PpeClassificationService) {
    this.ppe = new PpeRequest('', '', 0 );
  }

  ngOnInit() {
    this.ppeClassificationService.getPpeClassification().subscribe(
      result => {
        this.ppeClassifications = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit() {
    this.ppeService.addPpe(this.ppe).subscribe(
      response => {
        console.log('respuesta POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

  convertToInt (id){
    return parseInt(id, 10);
  }

}
