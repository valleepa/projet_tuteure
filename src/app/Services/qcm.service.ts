import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {QCM} from "../Modeles/QCM";
import {Q} from "@angular/cdk/keycodes";

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
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
    return this.http.get<QCM[]>(`http://localhost:8080/qcms/${id}`,this.httpOptions).pipe(map((res) => {
      return res
    }))
  }
  getQCMFromId(id:number): Observable<QCM>{
    return this.http.get<QCM>(`http://localhost:8080/qcm/${id}`,this.httpOptions).pipe(catchError(this.handleError<QCM>('Récupère un QCM')));
  }
  modifyQCM(QCM: QCM): Observable<QCM>{
    return this.http.put<QCM>(`http://localhost:8080/qcm`,QCM,this.httpOptions).pipe(catchError(this.handleError<QCM>('Modifie un QCM')));
  }
  createNewQCM(QCM:QCM): Observable<QCM>{
    return this.http.post<QCM>(`http://localhost:8080/qcm`,QCM,this.httpOptions).pipe(catchError(this.handleError<QCM>('Créé un QCM')));
  }
  deleteQCM(id:number): Observable<QCM>{
    return this.http.delete<QCM>(`http://localhost:8080/qcm/${id}`,this.httpOptions).pipe(catchError(this.handleError<QCM>('Supprime un QCM')));
  }
  // @ts-ignore
  generateApplication(): Observable<any>

}
