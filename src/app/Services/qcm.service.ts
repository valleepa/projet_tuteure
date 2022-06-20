import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {QCM} from "../Modeles/QCM";

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private backUrl = 'http://back.depta.krapo.pro/preferences';
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

  getQCMFromUser(id:string){
    return this.http.get<QCM[]>(`/qcms/${id}`).pipe(map((res) => {
      return res
    }))
  }
  generateNewQCM(QCM: QCM): Observable<QCM>{
    return this.http.post<QCM>(`/qcm`,QCM, this.httpOptions);
  }

  getQCMFromId(id:number): Observable<QCM>{
    return this.http.get<QCM>(`/qcm/${id}`,this.httpOptions).pipe(catchError(this.handleError<QCM>('Récupère un QCM')));
  }

  getQCMFromId(id:number): Observable<QCM>{
    return this.http.get<QCM>(`/qcm/${id}`,this.httpOptions).pipe(catchError(this.handleError<QCM>('Récupère un QCM')));
  }
  modifyQCM(QCM: QCM): Observable<QCM>{
    return this.http.put<QCM>(`/qcm`,QCM,this.httpOptions).pipe(catchError(this.handleError<QCM>('Modifie un QCM')));
  }
  createNewQCM(QCM:QCM): Observable<QCM>{
    return this.http.post<QCM>(`/qcm`,QCM,this.httpOptions).pipe(catchError(this.handleError<QCM>('Créé un QCM')));
  }
  deleteQCM(QCM:QCM): Observable<QCM>{
    return this.http.delete<QCM>(`/qcm/${QCM.id}`,{headers: new HttpHeaders({'Content-Type': 'application/json'}),body: QCM}).pipe(catchError(this.handleError<QCM>('Supprime un QCM')));
  }
  // @ts-ignore
  generateApplication(): Observable<any>

}
