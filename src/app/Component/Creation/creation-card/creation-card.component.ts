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
  isSelected:boolean = false;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    if( !(this.type === "question")){
      this.questionService.categorieActuel.subscribe(res => {
        this.selector = res.nom;
        this.isSelected = this.selector ===this.title;
      });
    }
    else if(this.type === "question"){
      this.questionService.categorieActuel.subscribe(res=> {

        this.questionService.questionActuel.subscribe(resQuest =>{
          let i = 0;
          while(res.questions[i]!=resQuest && i<res.questions.length){
            i++;
          }
          this.selector = "Question "+(i+1);
          this.isSelected = this.selector===this.title;
        })

      })
      this.questionService.questionActuel.subscribe(res => this.selector = res.intitule);
    }
  }

}
