import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {global} from '../global';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccidentReportService {

  private headers;
  PATH = 'accidentsReport';

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getAccidentReportByRangeDate(startDate: string, endDate: string): Observable<any> {
    return this.httpClient.get(global.url + this.PATH + '?startDate=' + startDate + '&endDate=' + endDate).map(res => res);
  }

}


