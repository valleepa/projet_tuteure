import { Injectable } from '@angular/core';
import {Question} from "./QUESTION";
import {BehaviorSubject} from "rxjs";
import {Categorie} from "./CATEGORIE";
import {QCM} from "./QCM";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionActuel = new BehaviorSubject(new Question('null', 'null', [],""));
  categorieActuel = new BehaviorSubject(new Categorie('null', [new Question('null', 'null', [],"")]));
  QCMActuel = new BehaviorSubject(new QCM([new Categorie('null', [new Question('null', 'null', [],"")])],'null',0,false,'null','null'));
  constructor() {
    this.QCMActuel.subscribe(res => {
      if(res.name!=='null'){
        localStorage.setItem("QCM",JSON.stringify(res));
      }

    });
  }
}
