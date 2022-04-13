import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from "../../../Services/question.service";

@Component({
  selector: 'app-creation-card',
  templateUrl: './creation-card.component.html',
  styleUrls: ['./creation-card.component.scss']
})
export class CreationCardComponent implements OnInit {
  @Input() title : string = '';
  @Input() type : string = '';
  selector !: string;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    if( !(this.type === "question")){
      this.questionService.categorieActuel.subscribe(res => this.selector = res.name);
    }
    else if(this.type === "question"){
      this.questionService.questionActuel.subscribe(res => this.selector = res.name);
    }
  }

}
