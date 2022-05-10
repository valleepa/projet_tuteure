import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private backUrl = 'http://localhost:8080/preferences';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'qcm/json'})
  };
  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console
      return of(result as T);
    };
  }

  generateApplication(): Observable<any>
}
