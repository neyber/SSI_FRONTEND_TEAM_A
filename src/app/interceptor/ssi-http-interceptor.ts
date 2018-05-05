import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SsiHttpInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // operations with response
      }
    }, (err: any) => {
      // operations with request errors
      console.log('Error intercepted....');

      if (err instanceof HttpErrorResponse) {
        // process SSI errors, show message
        if (err.error.responseType != null && err.error.responseType === 'ErrorResponse') {
          if (err.error.messages != null && err.error.messages.length > 0) {
            alert(err.error.messages[0].message);
          }
        }

        // return the error to process if is required
        return Observable.throw(err);
      }
    });
  }
}
