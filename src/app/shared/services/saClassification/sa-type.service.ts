import { Injectable } from '@angular/core';
import {global} from '../global';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SaTypeRequest} from '../../models/saclassification/SaTypeRequest';

@Injectable()
export class SaTypeService {
  private headers;


  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getSaTypes(): Observable<any> {
    return this.httpClient.get(global.url + 'saTypes').map(res => res);
  }

  getSaTypeById(saTypeId: number): Observable<any> {
    return this.httpClient.get(global.url + 'saTypes/' + saTypeId).map(res =>res);
  }

  addSaType(saType: SaTypeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'saTypes', saType, {headers: headers})
      .map(res => res);
  }

  deleteSaType(saTypeId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'saTypes/' + saTypeId).map(res => res);
  }

  updateSaType(saTypeId: number, saType: SaTypeRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'saTypes/' + saTypeId, saType, {headers: headers}).map(res => res);
  }
}
