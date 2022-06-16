import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {QCM} from "../Modeles/QCM";

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private backUrl = 'http://back.depta.krapo.pro/preferences';
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

  getQCMFromUser(id:string){
    return this.http.get<QCM[]>(`/qcms/${id}`).pipe(map((res) => {
      return res
    }))
  }

  // @ts-ignore
  generateApplication(): Observable<any>

}
