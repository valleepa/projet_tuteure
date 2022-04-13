import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../../../Services/question.service";
import {Categorie} from "../../../../Modeles/CATEGORIE";
import {Question} from "../../../../Modeles/QUESTION";
import { QCM } from 'src/app/Modeles/QCM';
import {Reponse} from "../../../../Modeles/REPONSE";
import {Option} from "../../../../Modeles/OPTION";

@Component({
  selector: 'app-creation-question-numerique',
  templateUrl: './creation-question-numerique.component.html',
  styleUrls: ['./creation-question-numerique.component.scss']
})
export class CreationQuestionNumeriqueComponent implements OnInit {
  QCM !: QCM;
  categorie!: Categorie;
  question!: Question;
  reponseNum: any;
  notationNum: any;

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
                  if(this.question.reponses.length>0){
                    this.reponseNum = this.question.reponses[0].contain;
                  }
                  else{
                    this.reponseNum = '';
                  }
                  if(this.question.options){
                    this.notationNum = this.question.options[0].valeur;
                  }
                  else{
                    this.notationNum = '';
                  }
                }
              });
            }
          });
        })
      });

    });
  }


  modifyReponse(value: string) {
    if(this.isNumber(value)){
      if(this.question.reponses.length>0){
        this.question.reponses[0].contain = value;
      }
      else{
        this.question.reponses[0] = new Reponse(value,true);
      }
      this.reponseNum = this.question.reponses[0].contain;
      this.questionService.reloadQCM(this.QCM);
    }
    else{
      // @ts-ignore
      document.getElementById("reponse").value = this.reponseNum;
    }
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

  modifyNotation(value: string) {
    if(this.isNumber(value)){
      if(this.question.options){
        this.question.options[0].valeur = value;
      }
      else{
        this.question.options = [new Option("BAREME",value)];
      }
      // @ts-ignore
      this.notationNum = this.question.options[0].valeur;
      console.log(this.QCM.categories[0].questions)
      this.questionService.reloadQCM(this.QCM);
    }
    else{
      // @ts-ignore
      document.getElementById("nota").value = this.notationNum;
    }
  }
}

