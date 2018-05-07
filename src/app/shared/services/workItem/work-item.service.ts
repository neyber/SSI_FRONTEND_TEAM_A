import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {global} from '../global';
import {WorkItemRequest} from '../../models/workItem/WorkItemRequest';

@Injectable()
export class WorkItemService {

  private headers;
  PATH = 'workItems/';

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getWorkItems(): Observable<any> {
    return this.httpClient.get(global.url + this.PATH).map(res => res);
  }
  getWorkItemById(workItemId: number): Observable<any> {
    return this.httpClient.get(global.url + this.PATH + workItemId).map(res => res);
  }
  addWorkItem(workItem: WorkItemRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + this.PATH, workItem, { headers: headers })
      .map(res => res);
  }
  deleteWorkItem(workItemId: number): Observable<any> {
    return this.httpClient.delete(global.url + this.PATH + workItemId).map(res => res);
  }

  updateWorkItem(workItemId: number, workItem: WorkItemRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + this.PATH + workItemId, workItem, { headers: headers }).map(res => res);
  }

}
