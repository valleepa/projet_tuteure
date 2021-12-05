import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-tab',
  templateUrl: './creation-tab.component.html',
  styleUrls: ['./creation-tab.component.scss']
})
export class CreationTabComponent implements OnInit {

  progress : number = 33.3;
  selector : string = 'QUESTIONS';
  constructor() { }

  ngOnInit(): void {
    if(!localStorage.getItem("selector")){
      this.onQuestions();
    }
    else {
      if (localStorage.getItem("selector") === "PARAMETRES")
        this.onParametres();
      else if(localStorage.getItem("selector")==="EDITION")
        this.onEdition();
    }
  }
  onQuestions() {
    this.progress = 33.3;
    localStorage.setItem("selector","QUESTIONS");
    this.selector = <string>localStorage.getItem("selector");
  }

  onParametres() {
    this.progress = 66.6;
    localStorage.setItem("selector","PARAMETRES");
    this.selector = <string>localStorage.getItem("selector");
  }

  onEdition() {
    this.progress = 100;
    localStorage.setItem("selector","EDITION");
    this.selector = <string>localStorage.getItem("selector");
  }
}
