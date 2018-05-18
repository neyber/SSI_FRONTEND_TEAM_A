import { Component, OnInit } from '@angular/core';
import {FunctionManualRequest} from '../../shared/models/functionManual/functionManualRequest';
import {FunctionManualService} from '../../shared/services/functionManual/function-manual.service';
import {Router} from '@angular/router';
import {Role} from '../../shared/models/Personnel/Role';
import {RoleService} from '../../shared/services/Personnel/role.service';

@Component({
  selector: 'app-create-manual',
  templateUrl: './create-manual.component.html',
  styleUrls: ['./create-manual.component.scss']
})
export class CreateManualComponent implements OnInit {
  public functionManual: FunctionManualRequest;
  role: Role[];

  constructor(private functionManualService: FunctionManualService, private roleService: RoleService, private router: Router) {
    this.functionManual = new FunctionManualRequest('', '', '', '', '', '', '', '', '', 0);
  }

  ngOnInit() {
    this.roleService.getRoles().subscribe(
      result => {
        this.role = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }
  onSubmit() {
    this.functionManualService.addManual(this.functionManual).subscribe(
      response => {
        this.router.navigateByUrl('functionManual', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }

}
