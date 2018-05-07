import { Component, OnInit } from '@angular/core';
import {RoleRequest} from '../../../shared/models/Personnel/RoleRequest';
import {RoleService} from '../../../shared/services/Personnel/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  public role: RoleRequest;

  constructor(private roleService: RoleService, private router: Router) {
    this.role = new RoleRequest('', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.roleService.addRole(this.role).subscribe(
      response => {
        this.router.navigateByUrl('roleList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  }
}
