import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../../shared/services/Personnel/role.service';
import {Role} from '../../../shared/models/Personnel/Role';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.scss']
})
export class ViewRoleComponent implements OnInit {
  roles: Role[];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe(
      result => {
        this.roles = result.data;
      },
      error => {
        console.log('error');
      }
    );
  }
}
