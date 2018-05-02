import { Injectable } from '@angular/core';
import { global } from '../global';
import {Headers, Http} from '@angular/http';
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
  addWorkItemClassification(workItemC: WorkItemClass){

    const json = JSON.stringify(workItemC);
    console.log('Description.............', workItemC.name);
    let aux  =  { description: json['description'],
      name: json['name']
    }
    const  params = 'json=' + json;

    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    console.log("los parametros enviados"+params);
    return this.http.post(global.url + 'workItemClassifications', params, {headers: headers})
      .map(res => res.json());
  }
}
