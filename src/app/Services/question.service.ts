import { Injectable } from '@angular/core';
import {Question} from "../Modeles/QUESTION";
import {BehaviorSubject} from "rxjs";
import {Categorie} from "../Modeles/CATEGORIE";
import {QCM} from "../Modeles/QCM";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionActuel = new BehaviorSubject(new Question('null', 'null', [],""));
  categorieActuel = new BehaviorSubject(new Categorie('null', [new Question('null', 'null', [],"")]));
  QCMActuel = new BehaviorSubject(new QCM([new Categorie('null', [new Question('null', 'null', [],"")])],'',0,false,'null','null'));
  constructor() {
    if(localStorage.getItem("QCM")){
      this.QCMActuel.next(JSON.parse(<string>localStorage.getItem("QCM")));
    }
    else {
      this.QCMActuel.next(new QCM([new Categorie('null', [new Question('null', 'null', [],"")])],'',0,false,'null','null'));
    }
    this.QCMActuel.subscribe(res => {
      if(res.name!=='null'){
        console.log("QCM");
        localStorage.setItem("QCM",JSON.stringify(res));
      }

    });
  }
  reloadQCM(QCM : QCM) {
    this.QCMActuel.next(QCM);
  }
}
