import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http} from '@angular/http';

@Injectable()
export class WorkItemClassService {
  private headers;
  constructor(private http: Http) {

    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  private url_= global.url + 'workItemClassifications';

  getWorkItemClassification(){

    return this.http.get(this.url_);


  }

}
