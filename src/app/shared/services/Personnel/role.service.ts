import { Injectable } from '@angular/core';
import {global} from '../global';
import {Headers, Http, RequestOptions} from '@angular/http';
import {RoleRequest} from '../../models/Personnel/RoleRequest';

@Injectable()
export class RoleService {

  constructor(private http: Http) { }

  getRoles() {
    return this.http.get(global.url + 'roles').map(res => res.json());
  }
  getRoleById(roleId: number) {
    return this.http.get(global.url + 'roles/' + roleId).map(res => res.json());
  }
  addRole(role: RoleRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'roles', role, options)
      .map(res => res.json());
  }
  deleteRole(roleId: number) {
    return this.http.delete(global.url + 'roles/' + roleId).map(res => res.json());
  }

  updateRole(roleId: number, role: RoleRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(global.url + 'roles/' + roleId, role, options).map(res => res.json());
  }

}
