import { Component, OnInit } from '@angular/core';
import {ExistingPpeRequest} from '../../../shared/models/existingPpe/ExistingPpeRequest';
import {Ppe} from '../../../shared/models/ppe/ppe';
import {PpeService} from '../../../shared/services/ppe/ppe.service';
import {Router} from '@angular/router';
import {ExistingPpeService} from '../../../shared/services/existingPpe/existing-ppe.service';

@Component({
  selector: 'app-create-existing-ppe',
  templateUrl: './create-existing-ppe.component.html',
  styleUrls: ['./create-existing-ppe.component.scss']
})
export class CreateExistingPpeComponent implements OnInit {

  public existingPpe: ExistingPpeRequest;
  ppes: Ppe[];

  constructor(private ppeService: PpeService, private existingPpeService: ExistingPpeService, private router: Router) {
    this.existingPpe = new ExistingPpeRequest('', '', 0, 0, 0 );
  }

  ngOnInit() {
    this.ppeService.getPpe().subscribe(
      result => {
        this.ppes = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

  onSubmit() {
    this.existingPpeService.addExistingPpe(this.existingPpe).subscribe(
      response => {
        this.router.navigateByUrl('existingPpeList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
