import { Injectable } from '@angular/core';
import { global } from '../global';
import {AuditRequest} from '../../models/audit/auditRequest';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuditService {

  private headers;
  
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getListAudit(): Observable<any> {
    return this.httpClient.get(global.url + 'audits').map(res => res);
  }

  getAuditById(auditId: number): Observable<any> {
    return this.httpClient.get(global.url + 'audits/' + auditId).map(res => res);
  }

  addAudit(audit: AuditRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(global.url + 'audits', audit, {headers: headers}).map(res => res);
  }

  deleteAudit(auditId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'audits/' + auditId).map(res => res);
  }

  updateAudit(auditId: number, audit: AuditRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'audits/' + auditId, audit, { headers: headers }).map(res => res);
  }

}
