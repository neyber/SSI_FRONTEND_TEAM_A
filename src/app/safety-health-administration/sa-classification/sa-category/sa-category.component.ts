import { Component, OnInit } from '@angular/core';
import {SaCategory} from '../../../shared/models/saclassification/SaCategory';
import {SaCategoryService} from '../../../shared/services/saClassification/sa-category.service';

@Component({
  selector: 'app-sa-category',
  templateUrl: './sa-category.component.html',
  styleUrls: ['./sa-category.component.scss']
})
export class SaCategoryComponent implements OnInit {

  saCategories: SaCategory[];

  constructor(private saCategoryService: SaCategoryService) { }

  ngOnInit() {
    this.loadData();
  }

  deleteSaCategory(saCategoryId) {
    if (confirm('Are you sure to delete this Category record?')) {
      this.saCategoryService.deleteSaCategory(saCategoryId).subscribe(response => {
        this.loadData();
      });
    }
  }

  loadData() {
    this.saCategoryService.getSaCategories().subscribe(
      result => {
        this.saCategories = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }

}
