import { Injectable } from '@angular/core';
import {global} from '../global';
import {FunctionManualRequest} from '../../models/functionManual/functionManualRequest';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FunctionManualService {
  private headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }
  getListManual(): Observable<any> {
    return this.httpClient.get(global.url + 'functionManuals').map(res => res);
  }
  getManualById(functionManualId: number): Observable<any> {
    return this.httpClient.get(global.url + 'functionManuals/' + functionManualId).map(res => res);
  }
  addManual(functionManual: FunctionManualRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(global.url + 'functionManuals', functionManual, {headers: headers}).map(res => res);
  }
  deleteManual(functionManualId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'functionManuals/' + functionManualId).map(res => res);
  }
  updateManual(functionManualId: number, functionManual: FunctionManualRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'functionManuals/' + functionManualId, functionManual, { headers: headers }).map(res => res);
  }

}
