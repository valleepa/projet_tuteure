import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../Modeles/QUESTION";
import {Reponse} from "../../../../Modeles/REPONSE";
import {Categorie} from "../../../../Modeles/CATEGORIE";
import {QuestionService} from "../../../../Services/question.service";
import {QCM} from "../../../../Modeles/QCM";
import {Option} from "../../../../Modeles/OPTION";

@Component({
  selector: 'app-creation-question-defaut',
  templateUrl: './creation-question-defaut.component.html',
  styleUrls: ['./creation-question-defaut.component.scss']
})

export class CreationQuestionDefautComponent implements OnInit {
  QCM !: QCM;
  categorie!: Categorie;
  question!: Question;
  editMode: Boolean = false;
  notationNum: any;

  constructor(private questionService: QuestionService) {
  }

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
                  if(this.question.options && this.question.options.length>0){
                    this.notationNum = this.question.options[0].valeur;
                  }
                  else{
                    this.notationNum = '';
                  }
                  if(this.question.reponses.length<2){
                    if(this.question.reponses.length<1){
                      this.question.reponses.push(new Reponse('', false));
                    }
                    this.question.reponses.push(new Reponse('', false));
                  }
                }
              });
            }
          });
        });
      });

    });
  }

  addAnswer(){
    this.question.reponses.push(new Reponse('', false));
    this.questionService.reloadQCM(this.QCM);
  }
  deleteAnswer(reponse : Reponse){
    const index = this.question.reponses.indexOf(reponse);
    if(index !== -1) {
      this.question.reponses.splice(index, 1);
    }
    this.questionService.reloadQCM(this.QCM);
  }

  modifyIsGodd(reponse: Reponse) {
    if(this.editMode){
      reponse.isGood ? reponse.isGood = false : reponse.isGood = true;
      this.questionService.reloadQCM(this.QCM);
    }
  }

  modifyReponse(reponse: Reponse, value: string) {
    const index = this.question.reponses.indexOf(reponse);
    this.question.reponses[index].contain = value;
    this.questionService.reloadQCM(this.QCM);
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
      if(this.question.options && this.question.options.length>0){
        this.question.options[0].valeur = value;
      }
      else{
        this.question.options = [new Option("BAREME",value)];
      }
      // @ts-ignore
      this.notationNum = this.question.options[0].valeur;
      this.questionService.reloadQCM(this.QCM);
    }
    else{
      // @ts-ignore
      document.getElementById("nota").value = this.notationNum;
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
