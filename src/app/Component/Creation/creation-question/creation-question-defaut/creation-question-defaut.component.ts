import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../QUESTION";
import {Reponse} from "../../../../REPONSE";
import {Categorie} from "../../../../CATEGORIE";

@Component({
  selector: 'app-creation-question-defaut',
  templateUrl: './creation-question-defaut.component.html',
  styleUrls: ['./creation-question-defaut.component.scss']
})

export class CreationQuestionDefautComponent implements OnInit {
  question!: Question;
  id = 2;
  reponses: Reponse[] = [];


  constructor() {
  }

  ngOnInit(): void {
  }

  addAnswer(){
    // let reponse = new Reponse("", this.id);
    // this.question.reponses.push(reponse);
    this.id +=1;
  }
}
