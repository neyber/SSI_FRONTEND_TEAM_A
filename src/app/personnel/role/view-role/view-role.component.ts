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

  deleteRole(roleId) {
    if(confirm('Are you sure to delete?')) {
      this.roleService.deleteRole(roleId).subscribe(res => {
        this.loadData();
      });
    }
  }

  loadData() {
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
