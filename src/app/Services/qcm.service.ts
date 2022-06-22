import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {QCM} from "../Modeles/QCM";
import {NotificationService} from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private backUrl = 'http://back.depta.krapo.pro/preferences';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private notificationService: NotificationService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.notificationService.errorMessage(operation);
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
    return this.http.post<QCM>(`/qcm/${QCM.id}/generate`,'', this.httpOptions);
  }

  getQCMFromId(id:number): Observable<QCM>{
    return this.http.get<QCM>(`/qcm/${id}`,this.httpOptions).pipe(catchError(this.handleError<QCM>('Ne parviens pas à récupérer le QCM')));
  }
  modifyQCM(QCM: QCM): Observable<QCM>{
    QCM.categories.forEach(categorie=>{
      categorie.questions.forEach(question=>{
        question.reponses.forEach(reponse=>{
          delete reponse.id
        })
      })
    })
    return this.http.put<QCM>(`/qcm`,QCM,this.httpOptions).pipe(catchError(this.handleError<QCM>('Ne parviens pas à modifier le QCM')));
  }
  createNewQCM(QCM:QCM): Observable<number>{
    delete QCM.id;
    return this.http.post<number>(`/qcm`,QCM,this.httpOptions).pipe(catchError(this.handleError<number>('Erreur lors de la création du QCM dans la base de donnée')));
  }
  deleteQCM(QCM:QCM): Observable<QCM>{
    return this.http.delete<QCM>(`/qcm/${QCM.id}`,{headers: new HttpHeaders({'Content-Type': 'application/json'}),body: QCM}).pipe(catchError(this.handleError<QCM>("La suppression du QCM n'a pas aboutie")));
  }
  // @ts-ignore
  //generateApplication(): Observable<any>

  getPDFFromIdAndId(idcreateur: string | undefined, id: number | undefined) {
    return fetch(`http://back.depta.krapo.pro/pdf/${idcreateur}/${id}`)
    .then(r=>
      r.blob()
    ).then(r =>{
      console.log("log");
      const file = new Blob([r],{type:'application/pdf'});
      return file;
    } )
  }
}
