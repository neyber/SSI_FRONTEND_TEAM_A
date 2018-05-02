import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http} from '@angular/http';
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
  addPpeClassification(ppeClassification: PpeClassificationRequest){
    const json = JSON.stringify(ppeClassification);
    const  params = 'json=' + json;
    const headers = new Headers({'Content-Type': 'application/json;'});
    console.log('los parametros enviados ' + params);
    return this.http.post(global.url + 'ppeClassifications', params, {headers: headers})
      .map(res => res.json());
  }
}
