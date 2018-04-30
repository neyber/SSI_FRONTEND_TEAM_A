import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class ReportService {
  private headers;

  constructor(private http: Http) {

    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  private url = 'http://localhost:8080/ssi/workItems?userId=1';

  getReport(){

    return this.http.get(this.url);


  }

}
