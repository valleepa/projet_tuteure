import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-creation-tab',
  templateUrl: './creation-tab.component.html',
  styleUrls: ['./creation-tab.component.scss']
})
export class CreationTabComponent implements OnInit {
  @Input() title : string = '';
  progress : number = 33.3;
  selector : string = 'QUESTIONS';
  showQuestions  = false;
  constructor(public router: Router) { }

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
    this.showQuestions = true;
    this.progress = 33.3;
    localStorage.setItem("selector","QUESTIONS");
    this.selector = <string>localStorage.getItem("selector");
    this.router.navigate(['creation/'+ this.title +'/questions']);
  }

  onParametres() {
    this.showQuestions = false;
    this.progress = 66.6;
    localStorage.setItem("selector","PARAMETRES");
    this.selector = <string>localStorage.getItem("selector");
    this.router.navigate(['creation/'+ this.title +'/parametres']);
  }

  onEdition() {
    this.showQuestions = false;
    this.progress = 100;
    localStorage.setItem("selector","EDITION");
    this.selector = <string>localStorage.getItem("selector");
    this.router.navigate(['creation/'+ this.title +'/edition']);
  }
}
