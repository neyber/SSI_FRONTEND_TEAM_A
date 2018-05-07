import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {global} from '../global';
import {ExistingPpeRequest} from '../../models/existingPpe/ExistingPpeRequest';

@Injectable()
export class ExistingPpeService {
  private headers;
  PATH = 'existingPpes/';

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getExistingPpe(): Observable<any> {
    return this.httpClient.get(global.url + this.PATH).map(res => res);
  }
  getExistingPpeById(existingPpeId: number): Observable<any> {
    return this.httpClient.get(global.url + this.PATH + existingPpeId).map(res => res);
  }
  addExistingPpe(existingPpe: ExistingPpeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + this.PATH, existingPpe, { headers: headers })
      .map(res => res);
  }
  deleteExistingPpe(existingPpeId: number): Observable<any> {
    return this.httpClient.delete(global.url + this.PATH + existingPpeId).map(res => res);
  }

  updateExistingPpe(existingPpeId: number, existingPpe: ExistingPpeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + this.PATH + existingPpeId, existingPpe, { headers: headers }).map(res => res);
  }
}
