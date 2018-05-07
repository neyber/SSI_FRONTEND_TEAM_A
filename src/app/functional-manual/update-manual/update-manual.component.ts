import { Component, OnInit } from '@angular/core';
import {FunctionManualRequest} from '../../shared/models/functionManual/functionManualRequest';
import {FunctionManualService} from '../../shared/services/functionManual/function-manual.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-manual',
  templateUrl: './update-manual.component.html',
  styleUrls: ['./update-manual.component.scss']
})
export class UpdateManualComponent implements OnInit {
  functionManual: FunctionManualRequest;

  constructor(private functionManualService: FunctionManualService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.functionManual = new FunctionManualRequest('', '', '', '', '', '', '', '', '', 0);
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      let functionManualId = params[0];
      this.functionManualService.getManualById(functionManualId).subscribe(
        result => {
          this.functionManual = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }
  onSubmit(functionManualId) {
    this.functionManualService.updateManual(functionManualId, this.functionManual).subscribe(
      response => {
        this.router.navigateByUrl('functionManual', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
