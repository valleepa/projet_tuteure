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
  private optionsSet: Option | undefined;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.QCMActuel.subscribe(value => {
      this.QCM = value;
      this.questionService.categorieActuel.subscribe(val =>{
        this.categorie = val;
        this.questionService.questionActuel.subscribe(valu=>{
          this.question = valu;
          this.QCM.categories.forEach(x=>{
            if(x.nom === this.categorie.nom){
              x.questions.forEach(y=>{
                if(y.intitule === this.question.intitule){
                  this.question = y;
                  if(this.question.reponses.length>0){
                    this.reponseNum = this.question.reponses[0].texte;
                  }
                  else{
                    this.reponseNum = '';
                  }
                  this.question.options.optionsset.forEach(val=>{

                    if(val.typeOption==="BONNEREPONSE"){
                      this.optionsSet=val;
                      this.notationNum=val.valeur;
                    }
                  });
                  if(!this.notationNum){
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
        for(let i = 0 ; i < this.question.options.optionsset.length ; i++){
          if(this.question.options.optionsset[i].typeOption == "BONNEREPONSE"){
            this.question.options.optionsset.splice(i);
          }
        }
        this.question.options.optionsset.push(new Option("BONNEREPONSE",value))
      }
      else{
        this.question.options.optionsset.push(new Option("BONNEREPONSE",value))
      }
      this.reponseNum = this.question.reponses[0].texte;
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
      for(let i = 0; i<this.question.options.optionsset.length;i++) {
        if (this.question.options.optionsset[i].typeOption === "BONNEREPONSE") {
          this.question.options.optionsset[i].valeur = value;
          this.notationNum = this.question.options.optionsset[i].valeur;
          this.questionService.reloadQCM(this.QCM);
          return;
        }
      }
      this.question.options.optionsset.push(new Option("BONNEREPONSE",value));
    }
    else{
      // @ts-ignore
      document.getElementById("nota").value = this.notationNum;
    }
  }

  deleteReponse() {
    if(this.reponseNum.length===1){
      // @ts-ignore
      this.question.reponses[0].contain = '';
      this.reponseNum = '';
      this.questionService.reloadQCM(this.QCM);
    }
  }

  deleteNotation() {
    if(this.notationNum.length===1){
      // @ts-ignore
      this.question.options[0].valeur = '';
      this.notationNum = '';
      this.questionService.reloadQCM(this.QCM);
    }
  }
}

