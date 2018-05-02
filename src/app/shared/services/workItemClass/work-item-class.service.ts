import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http} from '@angular/http';

@Injectable()
export class WorkItemClassService {
  private headers;
  public url_: string;
  constructor(private http: Http) {

    this.headers = new Headers({'Content-Type': 'application/json'});
  console.log()
  }



  getWorkItemClassification() {

    return this.http.get(global.url+'workItemClassifications').map(res => res.json());

  }

}
