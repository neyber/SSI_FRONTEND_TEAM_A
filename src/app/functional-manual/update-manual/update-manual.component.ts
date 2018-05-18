import { Component, OnInit } from '@angular/core';
import {FunctionManualRequest} from '../../shared/models/functionManual/functionManualRequest';
import {FunctionManualService} from '../../shared/services/functionManual/function-manual.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../shared/models/Personnel/Role';
import {RoleService} from '../../shared/services/Personnel/role.service';

@Component({
  selector: 'app-update-manual',
  templateUrl: './update-manual.component.html',
  styleUrls: ['./update-manual.component.scss']
})
export class UpdateManualComponent implements OnInit {

  functionManual: FunctionManualRequest;
  roles: Role[];

  constructor(private functionManualService: FunctionManualService, private roleService: RoleService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.functionManual = new FunctionManualRequest('', '', '', '', '', '', '', '', '', 0);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const functionManualId = params['id'];

      this.functionManualService.getManualById(functionManualId).subscribe(
        result => {

          this.functionManual = result.data;
          this.functionManual.roleFunction = result.data.roleFunction;
        },
        error => {
          console.log('error');
        }
      );
    });

    this.roleService.getRoles().subscribe(
      result => {
        this.roles = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }
  onSubmit(id) {
    this.functionManualService.updateManual(id, this.functionManual).subscribe(
      response => {
        console.log('test id = ' + id);
        this.router.navigateByUrl('functionManual', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
