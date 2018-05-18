import { Component, OnInit } from '@angular/core';
import {SaCategoryRequest} from '../../../shared/models/saclassification/saCategoryRequest';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createsacategory',
  templateUrl: './createsacategory.component.html',
  styleUrls: ['./createsacategory.component.scss']
})
export class CreatesacategoryComponent implements OnInit {

  public saCategory: SaCategoryRequest;
  constructor(private saCategoryService: SaCategoryService, private router: Router ) {
    this.saCategory = new SaCategoryRequest('', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.saCategoryService.addSaCategory(this.saCategory).subscribe(
      response => {
        this.router.navigateByUrl('saCategoryList', { skipLocationChange: true });
        console.log('respuesta POST' + response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
