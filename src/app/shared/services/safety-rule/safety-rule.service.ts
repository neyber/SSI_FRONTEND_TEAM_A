import { Injectable } from '@angular/core';
import { global } from '../global';
import { SafetyRuleRequest } from '../../models/safetyRule/safetyRuleRequest';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SafetyRuleService {

  private headers;

  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }
  getListSafetyRule(): Observable<any> {
    return this.httpClient.get(global.url + 'safetyRules').map(res => res);
  }

  getSafetyRuleById(safetyRuleId: number): Observable<any> {
    return this.httpClient.get(global.url + 'safetyRules/' + safetyRuleId).map(res => res);
  }

  addSafetyRule(safetyRule: SafetyRuleRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(global.url + 'safetyRules', safetyRule, { headers: headers }).map(res => res);
  }

  deleteSafetyRule(safetyRuleId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'safetyRules/' + safetyRuleId).map(res => res);
  }

  updateSafetyRule(safetyRuleId: number, safetyRule: SafetyRuleRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'safetyRules/' + safetyRuleId, safetyRule, { headers: headers }).map(res => res);
  }

}
