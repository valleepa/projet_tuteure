import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../../../CATEGORIE";
import {Question} from "../../../QUESTION";
import {Reponse} from "../../../REPONSE";
import {InputDialogComponent} from "../../Accueil/input-dialog/input-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {QuestionService} from "../../../question.service";

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
  categories : Categorie[];
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
    this.categories = JSON.parse(localStorage.getItem('categories')!);
    this.questionService.questionActuel.subscribe(val =>{
      if(val.type !== 'unique' && val.type !== 'multiple'){
        this.selected = val.type;
      }
      else{
        this.selected ='defaut';
      }
    })
  }


  ngOnInit(): void {
    this.questionService.questionActuel.subscribe(val => this.question = val);
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
  }

  setType() {
    this.question.type = this.selected;
  }
}
