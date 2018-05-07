import { Component, OnInit } from '@angular/core';
import {PpeRequest} from '../../../shared/models/ppe/PpeRequest';
import {PpeService} from '../../../shared/services/ppe/ppe.service';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-ppe',
  templateUrl: './create-ppe.component.html',
  styleUrls: ['./create-ppe.component.scss']
})
export class CreatePpeComponent implements OnInit {
  public ppe: PpeRequest;
  ppeClassifications: PpeClassification[];

  constructor(private ppeService: PpeService, private ppeClassificationService: PpeClassificationService, private router: Router) {
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
        this.router.navigateByUrl('ppeList', { skipLocationChange: true });
      },
      error => {
        console.log('error');
      }
    );
  }

}
