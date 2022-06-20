import { Injectable } from '@angular/core';
import {Question} from "../Modeles/QUESTION";
import {BehaviorSubject, Observable} from "rxjs";
import {Categorie} from "../Modeles/CATEGORIE";
import {QCM} from "../Modeles/QCM";
import {Options} from "../Modeles/OPTIONS";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionActuel = new BehaviorSubject(new Question('nullll', 'null', [],"",new Options('null',[])));
  categorieActuel = new BehaviorSubject(new Categorie('nu', [new Question('nul', 'null', [],"",new Options('null',[]))]));
  QCMActuel = new BehaviorSubject(new QCM([],'',false,"null",'null'));
  isNotSaved = new BehaviorSubject(false);
  constructor() {
    if(localStorage.getItem("QCM")){
      this.reloadQCM(JSON.parse(<string>localStorage.getItem("QCM")));
    }
    else {
      this.reloadQCM(new QCM([],'',false,'null','null'));
    }
    this.QCMActuel.subscribe(res => {
      console.log(res);
      if(res.titre!=='null'){
        localStorage.setItem("QCM",JSON.stringify(res));
      }

    });
  }
  reloadQCM(QCM : QCM) {
    this.isNotSaved.next(true);
    this.QCMActuel.next(QCM);
  }
}
