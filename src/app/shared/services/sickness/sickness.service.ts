import {Injectable} from '@angular/core';
import {global} from '../global';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SicknessRequest} from '../../models/sickness/SicknessRequest';

@Injectable()
export class SicknessService {
  private headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type ': 'application/json'});
  }

  getSickness(): Observable<any> {
    return this.httpClient.get(global.url + 'diseases').map(res => res);
  }

  getSicknessById(sicknessId: number): Observable<any> {
    return this.httpClient.get(global.url + 'diseases/' + sicknessId).map(res => res);
  }

  addSickness(sickness: SicknessRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'diseases', sickness, { headers: headers })
      .map(res => res);
  }

  deleteSickness(sicknessId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'diseases/' + sicknessId).map(res => res);
  }

  updateSickness(sicknessId: number, sickness: SicknessRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'diseases/' + sicknessId, sickness, { headers: headers }).map(res => res);
  }

}
