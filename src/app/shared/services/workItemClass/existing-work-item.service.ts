import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {global} from '../global';
import {ExistingWorkItemRequest} from '../../models/workItemClass/ExistingWorkItemRequest';

@Injectable()
export class ExistingWorkItemService {

  constructor(private http: Http) { }

  getExistingWorkItem() {
    return this.http.get(global.url + 'existingWorkItems').map(res => res.json());
  }

  getExistingWorkItemById(existingWorkItemId: number) {
    return this.http.get(global.url + 'existingWorkItems/' + existingWorkItemId).map(res => res.json());
  }

  addExistingWorkItem(existingWorkItems: ExistingWorkItemRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(global.url + 'existingWorkItems', existingWorkItems, options)
      .map(res => res.json());
  }

  deleteExistingWorkItem(existingWorkItemId: number) {
    return this.http.delete(global.url + 'existingWorkItems/' + existingWorkItemId).map(res => res.json());
  }

  updateExistingWorkItem(existingWorkItemId: number, existingWorkItem: ExistingWorkItemRequest) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(global.url + 'existingWorkItems/' + existingWorkItemId, existingWorkItem, options).map(res => res.json());
  }
}
