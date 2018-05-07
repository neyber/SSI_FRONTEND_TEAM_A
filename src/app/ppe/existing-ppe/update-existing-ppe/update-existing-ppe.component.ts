import { Component, OnInit } from '@angular/core';
import {PpeClassification} from '../../../shared/models/ppeClassification/ppeClassification';
import {PpeRequest} from '../../../shared/models/ppe/PpeRequest';
import {Ppe} from '../../../shared/models/ppe/ppe';
import {ExistingPpeRequest} from '../../../shared/models/existingPpe/ExistingPpeRequest';
import {PpeService} from '../../../shared/services/ppe/ppe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PpeClassificationService} from '../../../shared/services/ppeClassification/ppe-classification.service';
import {ExistingPpeService} from '../../../shared/services/existingPpe/existing-ppe.service';

@Component({
  selector: 'app-update-existing-ppe',
  templateUrl: './update-existing-ppe.component.html',
  styleUrls: ['./update-existing-ppe.component.scss']
})
export class UpdateExistingPpeComponent implements OnInit {

  existingPpe: ExistingPpeRequest;
  ppes: Ppe[];

  constructor(private ppeService: PpeService, private existingPpeService: ExistingPpeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.existingPpe = new ExistingPpeRequest('', '', 0, 0, 0 );
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let existingPpeId = params['existingPpeId'];
      this.existingPpeService.getExistingPpeById(existingPpeId).subscribe(
        result => {
          this.existingPpe = result.data;
          this.existingPpe.ppeId = result.data.ppe.ppeId;
        },
        error => {
          console.log('error');
        }
      );

      this.ppeService.getPpe().subscribe(
        result => {
          this.ppes = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }

  onSubmit(existingPpeId) {
    this.existingPpeService.updateExistingPpe(existingPpeId, this.existingPpe).subscribe(
      response => {
        this.router.navigateByUrl('existingPpeList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
