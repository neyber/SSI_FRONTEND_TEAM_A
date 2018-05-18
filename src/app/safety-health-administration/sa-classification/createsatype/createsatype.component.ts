import { Component, OnInit } from '@angular/core';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';
import {SaCategoryRequest} from '../../../shared/models/saclassification/saCategoryRequest';
import {Router} from '@angular/router';
import {SaTypeRequest} from '../../../shared/models/saclassification/SaTypeRequest';
import {SaTypeService} from '../../../shared/services/saClassification/sa-type.service';

@Component({
  selector: 'app-createsatype',
  templateUrl: './createsatype.component.html',
  styleUrls: ['./createsatype.component.scss']
})
export class CreatesatypeComponent implements OnInit {

  public saType: SaTypeRequest;
  constructor(private saTypeService: SaTypeService, private router: Router ) {
    this.saType = new SaTypeRequest('', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.saTypeService.addSaType(this.saType).subscribe(
      response => {
        this.router.navigateByUrl('saTypeList', { skipLocationChange: true });
        console.log('respuesta POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
