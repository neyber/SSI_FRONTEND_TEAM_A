import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http} from '@angular/http';

@Injectable()
export class WorkItemClassService {
  private headers;
  private url_= global.url + 'workItemClassifications';
  //console.log("mi url es "+url_);
  constructor(private http: Http) {

    this.headers = new Headers({'Content-Type': 'application/json'});
  }



  getWorkItemClassification() {

    return this.http.get(this.url_);

  }

}
