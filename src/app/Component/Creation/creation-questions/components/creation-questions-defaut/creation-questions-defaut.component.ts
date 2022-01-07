import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-questions-defaut',
  templateUrl: './creation-questions-defaut.component.html',
  styleUrls: ['./creation-questions-defaut.component.scss']
})
export class CreationQuestionsDefautComponent implements OnInit {

  public reponses = new Map<string,boolean>();

  constructor() { }

  
  ngOnInit(): void {
    //this.reponses.set({text:"Réponse correcte"},true);
  }

}
