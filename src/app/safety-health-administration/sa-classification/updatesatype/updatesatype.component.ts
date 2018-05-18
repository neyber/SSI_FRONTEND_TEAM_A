import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SaType} from '../../../shared/models/saclassification/SaType';
import {SaTypeService} from '../../../shared/services/saClassification/sa-type.service';

@Component({
  selector: 'app-updatesatype',
  templateUrl: './updatesatype.component.html',
  styleUrls: ['./updatesatype.component.scss']
})
export class UpdatesatypeComponent implements OnInit {

  public saType: SaType;
  constructor(private saTypeService: SaTypeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.saType = new SaType(0, '', '');
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const saTypeId = params['saTypeId'];
      this.saTypeService.getSaTypeById(saTypeId).subscribe(
        result => {
          this.saType = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }
  onSubmit(saTypeId) {
    this.saTypeService.updateSaType(saTypeId, this.saType).subscribe(
      response => {
        this.router.navigateByUrl('saTypeList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
