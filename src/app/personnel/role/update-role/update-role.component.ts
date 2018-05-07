import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../../shared/services/Personnel/role.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../../shared/models/Personnel/Role';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {
  role: Role;

  constructor(private roleService: RoleService, private router: Router, private activeRoute: ActivatedRoute) {
    this.role = new Role(0, '', '');
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      const roleId = params['roleId'];
      this.roleService.getRoleById(roleId).subscribe(
        result => {
          this.role = result.data;
        },
        error => {
          console.log('error');
        }
      );
    });
  }

  onSubmit(roleId) {
    this.roleService.updateRole(roleId, this.role).subscribe(
      response => {
        this.router.navigateByUrl('roleList', { skipLocationChange: true });
      },
      error => {
        console.log(error);
      }
    );
  };

}
