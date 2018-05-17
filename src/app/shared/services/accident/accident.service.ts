import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {global} from '../global';
import {AccidentRequest} from '../../models/accident/AccidentRequest';

@Injectable()
export class AccidentService {

  private headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type ': 'application/json'});
  }

  getAccident(): Observable<any> {
    return this.httpClient.get(global.url + 'accidents').map(res => res);
  }

  getAccidentById(accidentId: number): Observable<any> {
    return this.httpClient.get(global.url + 'accidents/' + accidentId).map(res => res);
  }

  addAccident(accident: AccidentRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'accidents', accident, { headers: headers })
      .map(res => res);
  }

  deleteAccident(accidentId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'accidents/' + accidentId).map(res => res);
  }

  updateAccident(accidentId: number, accident: AccidentRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'accidents/' + accidentId, accident, { headers: headers }).map(res => res);
  }

}
