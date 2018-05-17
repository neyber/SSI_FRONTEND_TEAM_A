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
    console.log('e423432');
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params['id']);
      const functionManualId = params['id'];
      console.log(functionManualId);
      this.functionManualService.getManualById(functionManualId).subscribe(
        result => {
          console.log('second');
          this.functionManual = result.data;
          // this.functionManual.roleFunction = result.data.roleEmployee.roleId;
          console.log('last');
          console.log(this.functionManual);
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
