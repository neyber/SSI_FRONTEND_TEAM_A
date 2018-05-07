import { Injectable } from '@angular/core';
import {global} from '../global';
import {Headers, Http, RequestOptions} from '@angular/http';
import {RoleRequest} from '../../models/Personnel/RoleRequest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RoleService {
  private headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getRoles(): Observable<any> {
    return this.httpClient.get(global.url + 'roles').map(res => res);
  }

  getRoleById(roleId: number): Observable<any> {
    return this.httpClient.get(global.url + 'roles/' + roleId).map(res => res);
  }
  addRole(role: RoleRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'roles', role, {headers: headers})
      .map(res => res);
  }
  deleteRole(roleId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'roles/' + roleId).map(res => res);
  }

  updateRole(roleId: number, role: RoleRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'roles/' + roleId, role, {headers: headers}).map(res => res);
  }

}
