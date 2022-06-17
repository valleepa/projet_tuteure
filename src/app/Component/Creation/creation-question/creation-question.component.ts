import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../../../Modeles/CATEGORIE";
import {Question} from "../../../Modeles/QUESTION";
import {Reponse} from "../../../Modeles/REPONSE";
import {InputDialogComponent} from "../../Accueil/input-dialog/input-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {QuestionService} from "../../../Services/question.service";
import {QCM} from "../../../Modeles/QCM";

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
          if(x.nom === this.categorie.nom){
            x.questions.forEach(y=>{
              if(y.intitule === this.question.intitule){
                this.question = y;
              }
                });
          }
        });
      });
    });

  }

  modifyName() {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height:'17%',
      panelClass: 'custom-dialog-container',
      data: {button: 'Modifier', placeholder: 'Nom', name:this.question.intitule},
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.modifyQuestionName(result);
      }
    });
  }

  modifyQuestionName(newName:any) {
    this.question.intitule = newName;
    this.questionService.questionActuel.next(this.question);
    this.questionService.reloadQCM(this.QCM);
  }

  setType() {
    this.question.type = this.selected;
    this.questionService.reloadQCM(this.QCM);
  }

  modifyQuestion(questionSt: string) {
    this.question.intitule = questionSt;
    this.questionService.reloadQCM(this.QCM);
  }

  typeChange() {
    this.question.options = [];
    this.question.reponses = [];
  }
}
