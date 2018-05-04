import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {global} from '../global';
import {EmployeeRequest} from '../../models/Personnel/EmployeeRequest';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get(global.url + 'employees').map(res => res.json());
  }
  getEmployeeById(employeeId: number) {
    return this.http.get(global.url + 'employees/' + employeeId).map(res => res.json());
  }
  addEmployee(employee: EmployeeRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'employees', employee, options)
      .map(res => res.json());
  }
  deleteEmployee(employeeId: number) {
    return this.http.delete(global.url + 'employees/' + employeeId).map(res => res.json());
  }

  updateEmployee(employeeId: number, employee: EmployeeRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(global.url + 'employees/' + employeeId, employee, options).map(res => res.json());
  }
}
