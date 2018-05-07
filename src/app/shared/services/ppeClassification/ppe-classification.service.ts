import { Injectable } from '@angular/core';
import { global } from '../global';
import {PpeClassificationRequest} from '../../models/ppeClassification/PpeClassificationRequest';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PpeClassificationService {
  private headers;
  public url_: string;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getPpeClassification(): Observable<any> {
    // return this.http.get(global.url + 'ppeClassifications').map(res => res.json());
    return this.httpClient.get(global.url + 'ppeClassifications').map(res => res);
  }

  getPpeClassificationById(ppeClassificationId: number): Observable<any> {
    // return this.http.get(global.url + 'ppeClassifications/' + ppeClassificationId).map(res => res.json());
    return this.httpClient.get(global.url + 'ppeClassifications/' + ppeClassificationId).map(res => res);
  }

  addPpeClassification(ppeClassification: PpeClassificationRequest): Observable<any> {
    /*
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(global.url + 'ppeClassifications', ppeClassification, options)
          .map(res => res.json());
    */
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(global.url + 'ppeClassifications', ppeClassification, {headers: headers})
      .map(res => res);
  }

  deletePpeClassification(ppeClassificationId: number): Observable<any> {
    // return this.http.delete(global.url + 'ppeClassifications/' + ppeClassificationId).map(res => res.json());
    return this.httpClient.delete(global.url + 'ppeClassifications/' + ppeClassificationId).map(res => res);
  }

  updatePpeClassification(ppeClassificationId: number, ppeClassification: PpeClassificationRequest): Observable<any> {
    /*
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.put(global.url + 'ppeClassifications/' + ppeClassificationId, ppeClassification, options).map(res => res.json());
    */
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(global.url + 'ppeClassifications/' + ppeClassificationId, ppeClassification, {headers: headers})
      .map(res => res);
  }
}
