import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http, RequestOptions} from '@angular/http';
import { WorkItemClass } from '../../../shared/models/workItemClass/WorkItemClass';

@Injectable()
export class WorkItemClassService {
  private headers;
  public url_: string;
  constructor(private http: Http) {

    this.headers = new Headers({'Content-Type': 'application/json'});

  }

  getWorkItemClassification() {

    return this.http.get(global.url + 'workItemClassifications' ).map(res => res.json());

  }
  getWorkItemClassById(id) {

    return this.http.get(global.url + 'workItemClassifications/' + id ).map(res => res.json());

  }
  addWorkItemClassification(workItemC: WorkItemClass) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'workItemClassifications', workItemC, options)
      .map(res => res.json());
  }
  editWorkItem(id, workItem) {
    let params = JSON.stringify(workItem);
    let headers = new Headers({'Content-Type': 'application/json'
    });

    return this.http.put(global.url + 'workItemClassifications/' + id, params, {headers: headers})
                    .map(res => res.json());
  }

  deleteWorkItemClassification(id) {

    return this.http.delete(global.url + 'workItemClassifications/' + id ).map(res => res.json());

  }
}
