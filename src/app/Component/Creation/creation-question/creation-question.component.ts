import {Component, Input, OnInit} from '@angular/core';
import {Categorie} from "../../../CATEGORIE";
import {Question} from "../../../QUESTION";

@Component({
  selector: 'app-creation-question',
  templateUrl: './creation-question.component.html',
  styleUrls: ['./creation-question.component.scss']
})
export class CreationQuestionComponent implements OnInit {
  categories : Categorie[];
  categorie!: Categorie;
  question!: Question;
  @Input() categorieName : string = '';
  @Input() questionName : string = '';
  constructor() {
    this.categories = JSON.parse(localStorage.getItem('categories')!);
  }

  ngOnInit(): void {
    this.findCategorie(this.categorieName);
    this.findQuestion(this.questionName);
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
