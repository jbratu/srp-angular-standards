import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authString = 'Basic ' + btoa('test:test');

    const authenticatedRequest = request.clone({
      headers: new HttpHeaders({
        Authorization: authString,
        'Content-Type': 'text/plain',
      }),
    });

    return next.handle(authenticatedRequest);
  }
}
