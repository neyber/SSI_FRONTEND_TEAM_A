import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { global } from './global';




@Injectable()
export class ReportService {
  private headers;
  userId = 1;
  constructor(private http: Http) {

    this.headers = new Headers({'Content-Type': 'application/json'});
  }

 // private url = 'http://localhost:8080/ssi/workItems?userId=1';
  private url_= global.url + 'workItems?' + this.userId;

  getReport(){

    return this.http.get(this.url_);


  }

}
