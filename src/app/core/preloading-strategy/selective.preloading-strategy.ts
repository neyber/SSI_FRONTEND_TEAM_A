import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

  delayTime = 200;

  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data['preload']) {
      if (route.data['delay']) {
        let currentDelay = this.delayTime;
        if (typeof route.data['delay'] === 'number' && route.data['delay'] > 0) {
          currentDelay = route.data['delay'];
        }
        return timer(currentDelay)
          .pipe(
            mergeMap(_ => load())
          );
      } else {
        return load();
      }
    } else {
      return Observable.of(null);
    }
  }
}
