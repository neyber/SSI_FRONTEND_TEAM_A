import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {global} from '../global';
import {PpeRequest} from '../../models/ppe/PpeRequest';

@Injectable()
export class PpeService {
  private headers;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getPpe() {
    return this.http.get(global.url + 'ppes').map(res => res.json());
  }
  getPpeById(ppeId:number){
    return this.http.get(global.url + 'ppes/' + ppeId).map(res => res.json());
  }
  addPpe(ppe: PpeRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'ppes', ppe, options)
      .map(res => res.json());
  }
  deletePpe(ppeClassificationId:number){
    return this.http.delete(global.url + 'ppes/' + ppeClassificationId).map(res => res.json());
  }

}
