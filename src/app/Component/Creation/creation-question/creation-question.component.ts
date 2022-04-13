import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../../../CATEGORIE";
import {Question} from "../../../QUESTION";
import {Reponse} from "../../../REPONSE";
import {InputDialogComponent} from "../../Accueil/input-dialog/input-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {QuestionService} from "../../../question.service";
import {QCM} from "../../../QCM";

interface Choix {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-creation-question',
  templateUrl: './creation-question.component.html',
  styleUrls: ['./creation-question.component.scss']
})
export class CreationQuestionComponent implements OnInit {
  QCM !: QCM;
  categorie!: Categorie;
  question!: Question;
  id = 2
  selected = '';

choix: Choix[] = [
  {value: 'defaut', viewValue: 'Par défaut'},
  {value: 'numerique', viewValue: 'Numérique'},
  {value: 'ouverte', viewValue: 'Ouverte'},
];

  reponses: Reponse[] = [];

  constructor(public dialog: MatDialog, private questionService: QuestionService) {

    this.questionService.questionActuel.subscribe(val =>{
      if(val.type !== 'unique' && val.type !== 'multiple'){
        this.selected = val.type;
      }
      else{
        this.selected ='defaut';
      }
      this.question = val;
    })
  }


  ngOnInit(): void {
    this.questionService.QCMActuel.subscribe(value => {
      this.QCM = value;
      this.questionService.categorieActuel.subscribe(val =>{
        this.categorie = val;
        this.QCM.categories.forEach(x=>{
          if(x.name === this.categorie.name){
            x.questions.forEach(y=>{
              if(y.name === this.question.name){
                this.question = y;
              }
                });
          }
        });
      });

    });

  }

  addAnswer(){
    let reponse = new Reponse("", this.id);
    this.question.reponses.push(reponse);
    this.id +=1;
  }

  modifyName() {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height:'17%',
      panelClass: 'custom-dialog-container',
      data: {button: 'Modifier', placeholder: 'Nom', name:this.question.name},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.modifyQuestionName(result);
      }
    });
  }

  modifyQuestionName(newName:any) {
    this.question.name = newName;
    this.questionService.questionActuel.next(this.question);
    this.reloadQCM();
  }

  setType() {
    this.question.type = this.selected;
    this.reloadQCM();
  }

  modifyQuestion(questionSt: string) {
    this.question.val = questionSt;
    this.reloadQCM();
  }
  reloadQCM(){
    this.questionService.QCMActuel.next(this.QCM);
  }
}
