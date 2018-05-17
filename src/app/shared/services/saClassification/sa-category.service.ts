import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {global} from '../global';
import {SaCategoryRequest} from '../../models/saclassification/saCategoryRequest';

@Injectable()
export class SaCategoryService {
  private headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  getSaCategories(): Observable<any> {
    return this.httpClient.get(global.url + 'saCategories').map(res => res);
  }

  getSaCategoryById(saCategoryId: number): Observable<any> {
    return this.httpClient.get(global.url + 'saCategories/' + saCategoryId).map(res =>res);
  }

  addSaCategory(saCategory: SaCategoryRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(global.url + 'saCategories', saCategory, {headers: headers})
      .map(res => res);
  }

  deleteSaCategory(saCategoryId: number): Observable<any> {
    return this.httpClient.delete(global.url + 'saCategories/' + saCategoryId).map(res => res);
  }

  updateSaCategory(saCategoryId: number, saCategory: SaCategoryRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.put(global.url + 'saCategories/' + saCategoryId, saCategory, {headers: headers}).map(res => res);
  }
}


