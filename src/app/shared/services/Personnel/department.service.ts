import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {global} from '../global';
import {DepartmentRequest} from '../../models/Personnel/DepartmentRequest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DepartmentService {
  private headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getDepartments(): Observable<any>{
    return this.httpClient.get(global.url + 'departments').map(res => res);
  }

  getDepartmentById(departmentId: number): Observable<any> {
    return this.httpClient.get(global.url + 'departments/' + departmentId).map(res => res);
  }

  addDepartment(department: DepartmentRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'departments', department, {headers: headers})
      .map(res => res);
  }

  deleteDepartment(departmentId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'departments/' + departmentId).map(res => res);
  }

  updateDepartment(departmentId: number, department: DepartmentRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(global.url + 'departments/' + departmentId, department, {headers: headers})
      .map(res => res);
  }

}
