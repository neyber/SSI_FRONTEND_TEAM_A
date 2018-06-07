import { Injectable } from '@angular/core';
import {global} from '../global';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuditHistoryService {



  private headers;
  PATH = 'workItems/';

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getWorkItems(): Observable<any> {
    return this.httpClient.get(global.url + this.PATH).map(res => res);
  }
}
