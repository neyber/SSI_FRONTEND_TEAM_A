import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http, RequestOptions} from '@angular/http';
import {PpeClassificationRequest} from '../../models/ppeClassification/PpeClassificationRequest';

@Injectable()
export class PpeClassificationService {
  private headers;
  public url_: string;
  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getPpeClassification() {

    return this.http.get(global.url + 'ppeClassifications').map(res => res.json());

  }
  addPpeClassification(ppeClassification: PpeClassificationRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'ppeClassifications', ppeClassification, options)
      .map(res => res.json());
  }
}
