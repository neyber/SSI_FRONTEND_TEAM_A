import { Injectable } from '@angular/core';
import {global} from '../global';
import {EmployeeRequest} from '../../models/Personnel/EmployeeRequest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
  private headers;
  public url: string;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getEmployees(): Observable<any> {
    return this.httpClient.get(global.url + 'employees').map(res => res);
  }
  getEmployeeById(employeeId: number): Observable<any> {
    return this.httpClient.get(global.url + 'employees/' + employeeId).map(res => res);
  }
  addEmployee(employee: EmployeeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'employees', employee, {headers: headers})
      .map(res => res);
  }
  deleteEmployee(employeeId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'employees/' + employeeId).map(res => res);
  }

  updateEmployee(employeeId: number, employee: EmployeeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(global.url + 'employees/' + employeeId, employee, {headers: headers})
      .map(res => res);
  }
}
