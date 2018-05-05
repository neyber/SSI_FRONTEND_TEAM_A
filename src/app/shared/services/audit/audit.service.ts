import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http, RequestOptions} from '@angular/http';
import {AuditRequest} from '../../models/audit/auditRequest';

@Injectable()
export class AuditService {

  private headers;
  
  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getListAudit() {
    return this.http.get(global.url + 'audits').map(res => res.json());
  }

  getAuditById(auditId: number) {
    return this.http.get(global.url + 'audits/' + auditId).map(res => res.json());
  }

  addAudit(audit: AuditRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(global.url + 'audits', audit, options).map(res => res.json());
  }

  deleteAudit(auditId: number) {
    return this.http.delete(global.url + 'audits/' + auditId).map(res => res.json());
  }

  updateAudit(auditId: number, audit: AuditRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(global.url + 'audits/' + auditId, audit, options).map(res => res.json());
  }

}
