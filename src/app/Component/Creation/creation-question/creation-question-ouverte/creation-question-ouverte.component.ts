import { Component, OnInit } from '@angular/core';
import {Reponse} from "../../../../Modeles/REPONSE";
import {Categorie} from "../../../../Modeles/CATEGORIE";
import {Question} from "../../../../Modeles/QUESTION";
import {QCM} from "../../../../Modeles/QCM";
import {QuestionService} from "../../../../Services/question.service";
import {Option} from "../../../../Modeles/OPTION";

@Component({
  selector: 'app-creation-question-ouverte',
  templateUrl: './creation-question-ouverte.component.html',
  styleUrls: ['./creation-question-ouverte.component.scss']
})
export class CreationQuestionOuverteComponent implements OnInit {
  notationNumF: any;
  notationNumAB: any;
  notationNumTB: any;
  QCM !: QCM;
  categorie!: Categorie;
  question!: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.QCMActuel.subscribe(value => {
      this.QCM = value;
      this.questionService.categorieActuel.subscribe(val =>{
        this.categorie = val;
        this.questionService.questionActuel.subscribe(valu=>{
          this.question = valu;
          this.QCM.categories.forEach(x=>{
            if(x.name === this.categorie.name){
              x.questions.forEach(y=>{
                if(y.name === this.question.name){
                  this.question = y;
                  if(this.question.options && this.question.options.length>0){
                    this.notationNumAB = this.question.options[0].valeur;
                    this.notationNumTB = this.question.options[1].valeur;
                    this.notationNumF = this.question.options[2].valeur;
                  }
                  else{
                    this.notationNumAB = '';
                    this.notationNumTB = '';
                    this.notationNumF = '';
                  }
                }
              });
            }
          });
        });
      });

    });
  }
  isNumber(str: string): boolean {
    if (typeof str !== 'string') {
      return false;
    }

    if (str.trim() === '') {
      return false;
    }

    return !Number.isNaN(Number(str));
  }

  modifyNotationF(value: string) {
    if(this.isNumber(value)){
      if(this.question.options && this.question.options.length>0){
        this.question.options[2].valeur = value;
      }
      else{
        this.question.options = [new Option("BAREMEAB",''),new Option("BAREMETB",''),new Option("BAREMEF",value)];
      }
      // @ts-ignore
      this.notationNumF = this.question.options[2].valeur;
      this.questionService.reloadQCM(this.QCM);
    }
    else{
      // @ts-ignore
      document.getElementById("notaF").value = this.notationNumF;
    }

  }

  modifyNotationAB(value: string) {
    if(this.isNumber(value)){
      if(this.question.options && this.question.options.length>0){
        this.question.options[0].valeur = value;
      }
      else{
        this.question.options = [new Option("BAREMEAB",value),new Option("BAREMETB",''),new Option("BAREMEF",'')];
      }
      // @ts-ignore
      this.notationNumAB = this.question.options[0].valeur;
      this.questionService.reloadQCM(this.QCM);
    }
    else{
      // @ts-ignore
      document.getElementById("notaAB").value = this.notationNumAB;
    }
  }

  modifyNotationTB(value: string) {
    if(this.isNumber(value)){
      if(this.question.options && this.question.options.length>0){
        this.question.options[1].valeur = value;
      }
      else{
        this.question.options = [new Option("BAREMEAB",''),new Option("BAREMETB",value),new Option("BAREMEF",'')];
      }
      // @ts-ignore
      this.notationNumTB = this.question.options[1].valeur;
      this.questionService.reloadQCM(this.QCM);
    }
    else{
      // @ts-ignore
      document.getElementById("notaTB").value = this.notationNumTB;
    }
  }

  deleteNotationF() {
    if(this.notationNumF.length===1){
      // @ts-ignore
      this.question.options[2].valeur = '';
      this.notationNumF = '';
      this.questionService.reloadQCM(this.QCM);
    }
  }

  deleteNotationAB() {
    if(this.notationNumAB.length===1){
      // @ts-ignore
      this.question.options[0].valeur = '';
      this.notationNumAB = '';
      this.questionService.reloadQCM(this.QCM);
    }
  }

  deleteNotationTB() {
    if(this.notationNumTB.length===1){
      // @ts-ignore
      this.question.options[1].valeur = '';
      this.notationNumTB = '';
      this.questionService.reloadQCM(this.QCM);
    }
  }
}
