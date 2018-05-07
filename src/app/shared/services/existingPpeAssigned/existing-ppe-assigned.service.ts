import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {global} from '../global';
import {ExistingPpeAssignedRequest} from '../../models/existingPpeAssigned/ExistingPpeAssignedRequest';

@Injectable()
export class ExistingPpeAssignedService {

  private headers;
  PATH = 'existingPpeAssigneds/';

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getExistingPpeAssigned(): Observable<any> {
    return this.httpClient.get(global.url + this.PATH).map(res => res);
  }
  getExistingPpeAssignedById(existingPpeAssignedId: number): Observable<any> {
    return this.httpClient.get(global.url + this.PATH + existingPpeAssignedId).map(res => res);
  }
  addExistingPpeAssigned(existingPpeAssigned: ExistingPpeAssignedRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + this.PATH, existingPpeAssigned, { headers: headers })
      .map(res => res);
  }
  deleteExistingPpeAssigned(existingPpeAssignedId: number): Observable<any> {
    return this.httpClient.delete(global.url + this.PATH + existingPpeAssignedId).map(res => res);
  }

  updateExistingPpeAssigned(existingPpeAssignedId: number, existingPpeAssigned: ExistingPpeAssignedRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + this.PATH + existingPpeAssignedId, existingPpeAssigned, { headers: headers }).map(res => res);
  }
}
