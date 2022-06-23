import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../../../Modeles/CATEGORIE";
import {Question} from "../../../Modeles/QUESTION";
import {Reponse} from "../../../Modeles/REPONSE";
import {InputDialogComponent} from "../../Accueil/input-dialog/input-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {QuestionService} from "../../../Services/question.service";
import {QCM} from "../../../Modeles/QCM";
import {Options} from "../../../Modeles/OPTIONS";

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
  }


  ngOnInit(): void {
    this.questionService.QCMActuel.subscribe(value => {
      this.QCM = value;
      this.questionService.categorieActuel.subscribe(val =>{
        this.categorie = val;
        this.questionService.questionActuel.subscribe(val =>{
          if(val.typeDeQuestion === 'UNIQUE' || val.typeDeQuestion === 'MULTIPLE'){
            this.selected = 'defaut';
          }
          else if(val.typeDeQuestion ==='OUVERTE'){
            this.selected ='ouverte';
          }
          else{
            this.selected='numerique';
          }
          this.question = val;
        })
        this.QCM.categories.forEach(x=>{
          if(x.nom === this.categorie.nom){
            x.questions.forEach(y=>{
              if(y.intitule === this.question.intitule){
                this.question = y;
              }
                });
          }
        });
        })
      });
    };

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
        this.questionService.isNotSaved.next(false);
      }
    });
  }

  modifyQuestionName(newName:any) {
    this.question.intitule = newName;
    this.questionService.questionActuel.next(this.question);
    this.questionService.reloadQCM(this.QCM);
  }
  setType() {
    if(this.selected==="defaut"){
      let compt = 0;
      for(let i = 0;i< this.question.reponses.length;i++){
        if(this.question.reponses[i].isGood){
          compt++;
        }
      }
      if(compt>1){
        this.question.typeDeQuestion='MULTIPLE';
      }
      else{
        this.question.typeDeQuestion = 'UNIQUE';
      }
    }
    else if(this.selected ==='numerique'){
      this.question.typeDeQuestion = 'NUMERIQUE';
    }
    else{
      this.question.typeDeQuestion = 'OUVERTE';
    }
    this.questionService.reloadQCM(this.QCM);
  }

  modifyQuestion(questionSt: string) {
    this.question.intitule = questionSt;
    this.questionService.reloadQCM(this.QCM);
  }

  typeChange() {
    this.question.options =new Options('null',[]);
    this.question.reponses = [];
  }
}
