import { Injectable } from '@angular/core';
import {Question} from "../Modeles/QUESTION";
import {BehaviorSubject} from "rxjs";
import {Categorie} from "../Modeles/CATEGORIE";
import {QCM} from "../Modeles/QCM";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionActuel = new BehaviorSubject(new Question('nullll', 'null', [],"",""));
  categorieActuel = new BehaviorSubject(new Categorie('nu', [new Question('nul', 'null', [],"","")]));
  QCMActuel = new BehaviorSubject(new QCM([],'',false,"null",'null'));
  constructor() {
    if(localStorage.getItem("QCM")){
      this.QCMActuel.next(JSON.parse(<string>localStorage.getItem("QCM")));
    }
    else {
      this.QCMActuel.next(new QCM([],'',false,'null','null'));
    }
    this.QCMActuel.subscribe(res => {
      if(res.titre!=='null'){
        localStorage.setItem("QCM",JSON.stringify(res));
      }

    });
  }
  reloadQCM(QCM : QCM) {
    this.QCMActuel.next(QCM);
  }
}
