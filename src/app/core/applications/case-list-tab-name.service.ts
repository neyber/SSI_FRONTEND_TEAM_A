import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class CaseListTabNameService{
  currentTabName = new BehaviorSubject<string>('assigned');

  constructor(private Router: Router, protected http: HttpClient){
  }

  initializeTabName() {
    /*const currentRouter = this.Router.url;
    if (currentRouter.indexOf('assigned') > -1) {
      this.setCurrentTabName('assigned')
    } else if (currentRouter.indexOf('closed') > -1) {
      this.setCurrentTabName('closed')
    } else if (currentRouter.indexOf('team') > -1) {
      this.setCurrentTabName('team')
    } else if (currentRouter.indexOf('unassigned') > -1) {
      this.setCurrentTabName('unassigned')
    }*/
  }

  setCurrentTabName(tabName: string) {
    this.currentTabName.next(tabName);
  }
  getCurrentTabName(): Observable<string> {
    return this.currentTabName.asObservable();
  }
   getDefaultCurrentTabName(): string {
    return this.currentTabName.getValue();
  }
}
