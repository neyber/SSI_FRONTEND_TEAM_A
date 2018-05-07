import {Injectable} from '@angular/core';
import {global} from '../global';

import {Headers, Http, RequestOptions} from '@angular/http';
import {SaClassificationRequest} from '../../models/saclassification/saClassificationRequest';

@Injectable()
export class SaClassificationService {

  private headers;
  constructor(private http: Http) {

    this.headers = new Headers({'Content-Type': 'application/json'});

  }

  getSaClassification() {

    return this.http.get(global.url + 'saClassifications' ).map(res => res.json());

  }
  getAllAccidents() {

    return this.http.get(global.url + 'accidents' ).map(res => res.json());

  }

  getSaClassificationById(saClassificationId: number) {
    return this.http.get(global.url + 'saClassifications/' + saClassificationId).map(res => res.json());
  }

  addSaClassification(saClassification: SaClassificationRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'saClassifications', saClassification, options)
      .map(res => res.json());
  }

  deleteSaClassification(saClassificationId: number) {

    return this.http.delete(global.url + 'saClassifications/' + saClassificationId).map(res => res.json());
  }

  updateSaClassification(saClassificationId: number, saClassification: SaClassificationRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(global.url + 'saClassifications/' + saClassificationId, saClassification, options).map(res => res.json());
  }



}
