import { Injectable } from '@angular/core';
import {global} from '../global';
import {PpeRequest} from '../../models/ppe/PpeRequest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PpeService {
  private headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type ': 'application/json'});
  }

  getPpe(): Observable<any> {
    return this.httpClient.get(global.url + 'ppes').map(res => res);
  }
  getPpeById(ppeId: number): Observable<any> {
    return this.httpClient.get(global.url + 'ppes/' + ppeId).map(res => res);
  }
  addPpe(ppe: PpeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'ppes', ppe, { headers: headers })
      .map(res => res);
  }
  deletePpe(ppeId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'ppes/' + ppeId).map(res => res);
  }

  updatePpe(ppeId: number, ppe: PpeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'ppes/' + ppeId, ppe, { headers: headers }).map(res => res);
  }

}
