import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {QCM} from "../Modeles/QCM";

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
  generateNewQCM(QCM: QCM): Observable<QCM>{
    return this.http.post<QCM>(`http://localhost:8080/qcm`,QCM, this.httpOptions);
  }

  getQCMFromUser(id:number){
    return this.http.get<QCM[]>(`http://localhost:8080/qcms/${id}`).pipe(map((res) => {
      return res
    }))
  }

  // @ts-ignore
  generateApplication(): Observable<any>

}
