import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../QUESTION";
import {Reponse} from "../../../../REPONSE";
import {Categorie} from "../../../../CATEGORIE";
import {QuestionService} from "../../../../question.service";

@Component({
  selector: 'app-creation-question-defaut',
  templateUrl: './creation-question-defaut.component.html',
  styleUrls: ['./creation-question-defaut.component.scss']
})

export class CreationQuestionDefautComponent implements OnInit {
  question!:Question;
  id:number=1;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService.questionActuel.subscribe(value => {
      this.question=value;
      this.id = value.reponses.length + 2;
    });
  }

  addAnswer(){
    this.question.reponses.push(new Reponse('', this.id));
    this.id = this.question.reponses.length + 2;
  }
}
