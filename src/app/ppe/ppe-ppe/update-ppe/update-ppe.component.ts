import { Component, OnInit } from '@angular/core';
import {PpeRequest} from '../../../shared/models/ppe/PpeRequest';
import {ActivatedRoute, Router} from '@angular/router';
import {PpeService} from '../../../shared/services/ppe/ppe.service';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';

@Component({
  selector: 'app-update-ppe',
  templateUrl: './update-ppe.component.html',
  styleUrls: ['./update-ppe.component.scss']
})
export class UpdatePpeComponent implements OnInit {

  ppe: PpeRequest;
  ppeClassifications: PpeClassification[];

  constructor(private ppeService: PpeService, private ppeClassificationService: PpeClassificationService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.ppe = new PpeRequest('', '', 0 );
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let ppeId = params['ppeId'];
      this.ppeService.getPpeById(ppeId).subscribe(
        result => {
          this.ppe = result.data;
          this.ppe.ppeClassificationId = result.data.ppeClassification.ppeClassificationId;
        },
        error => {
          console.log('error');
        }
      );

      this.ppeClassificationService.getPpeClassification().subscribe(
        result => {
          this.ppeClassifications = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }

  onSubmit(ppeId) {
    this.ppeService.updatePpe(ppeId, this.ppe).subscribe(
      response => {
        this.router.navigateByUrl('ppeList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
