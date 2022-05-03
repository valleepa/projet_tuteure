import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let localHeaders = req.headers
    if(this.authenticationService.isUserLoggedIn()){
      localHeaders = localHeaders.set('Authorization',`Basic ${window.btoa(this.authenticationService.username + ":" + this.authenticationService.password)}`)
    }
    if(!req.headers.get('Content-Type')){
      localHeaders = localHeaders.set('Content-Type','application/json')
    }
    req = req.clone({
      headers:localHeaders
    })
    req = req.clone({
      withCredentials: true
    });
    return next.handle(req);
  }
}
