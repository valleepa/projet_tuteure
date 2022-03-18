import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../../../CATEGORIE";
import {Question} from "../../../QUESTION";
import {Reponse} from "../../../REPONSE";

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

  @Input() categorieName : string = '';
  @Input() questionName : string = '';



choix: Choix[] = [
  {value: 'defaut-0', viewValue: 'Par défaut'},
  {value: 'numerique-1', viewValue: 'Numérique'},
  {value: 'ouverte-2', viewValue: 'Ouverte'},
];

  reponses: Reponse[] = [];

  constructor() {
    this.categories = JSON.parse(localStorage.getItem('categories')!);
  }


  ngOnInit(): void {
    this.findCategorie(this.categorieName);
    this.findQuestion(this.questionName);
  }

  addAnswer(){
    let reponse = new Reponse("", this.id);
    this.question.reponses.push(reponse);
    this.id +=1;
  }

  findCategorie(name:string){
    for(let i of this.categories){
      if(i.name === name){
        this.categorie = i;
        this.categorieName = i.name;
        break;
      }
    }
  }

  private findQuestion(name: string) {
    for(let i of this.categorie.questions){
      if(i.name === name){
        this.question = i;
        this.questionName = i.name;
      }
    }
  }
}
