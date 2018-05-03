import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {global} from '../global';
import {DepartmentRequest} from '../../models/Personnel/DepartmentRequest';

@Injectable()
export class DepartmentService {
  private headers;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getDepartments() {
    return this.http.get(global.url + 'departments').map(res => res.json());
  }

  getDepartmentById(departmentId: number) {
    return this.http.get(global.url + 'departments/' + departmentId).map(res => res.json());
  }

  addDepartment(department: DepartmentRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'departments', department, options)
      .map(res => res.json());
  }

  deleteDepartment(departmentId: number) {
    return this.http.delete(global.url + 'departments/' + departmentId).map(res => res.json());
  }

  updateDepartment(departmentId: number, department: DepartmentRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(global.url + 'departments/' + departmentId, department, options).map(res => res.json());
  }

}
