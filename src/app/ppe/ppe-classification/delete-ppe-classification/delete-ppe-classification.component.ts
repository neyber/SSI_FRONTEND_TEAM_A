import { Component, OnInit } from '@angular/core';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';

@Component({
  selector: 'app-delete-ppe-classification',
  templateUrl: './delete-ppe-classification.component.html',
  styleUrls: ['./delete-ppe-classification.component.scss']
})
export class DeletePpeClassificationComponent implements OnInit {
  public ppeClassificationId: number;

  constructor(private ppeClassificationService: PpeClassificationService) {
    this.ppeClassificationId = 0;
  }

  ngOnInit() {
  }
  onSubmit(){
    this.ppeClassificationService.deletePpeClassification(this.ppeClassificationId).subscribe(
      response => {
        //console.log('respuesta DELETE' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
