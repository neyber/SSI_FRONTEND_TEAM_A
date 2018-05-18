import { Component, OnInit } from '@angular/core';
import {SaCategory} from '../../../shared/models/saclassification/SaCategory';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-updatesacategory',
  templateUrl: './updatesacategory.component.html',
  styleUrls: ['./updatesacategory.component.scss']
})
export class UpdatesacategoryComponent implements OnInit {

  public saCategory: SaCategory;
  constructor(private saCategoryService: SaCategoryService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.saCategory = new SaCategory(0, '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const saCategoryId = params['saCategoryId'];
      this.saCategoryService.getSaCategoryById(saCategoryId).subscribe(
        result => {
          this.saCategory = result.data;
          console.log(this.saCategory);
        },
        error => {
          console.log('error');
        }
      );
    });
  }
  onSubmit(saCategoryId) {
    this.saCategoryService.updateSaCategory(saCategoryId, this.saCategory).subscribe(
      response => {
        this.router.navigateByUrl('saCategoryList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
