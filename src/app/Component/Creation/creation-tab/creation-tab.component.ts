import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-creation-tab',
  templateUrl: './creation-tab.component.html',
  styleUrls: ['./creation-tab.component.scss']
})
export class CreationTabComponent implements OnInit {

  progress : number = 33.3;
  selector : string = 'QUESTIONS';
  o: any;
  @Output() selecteur = new EventEmitter<string>();

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
    const obs = new Observable(
      (o) => {
        this.o = o;
      }
    );

    //

    obs.subscribe(i => console.log(i));
  }
  onQuestions() {
    this.progress = 33.3;
    localStorage.setItem("selector","QUESTIONS");
    this.o.next(1);
    this.selector = <string>localStorage.getItem("selector");
    this.addNewItem("QUESTIONS");
  }

  onParametres() {
    this.progress = 66.6;
    localStorage.setItem("selector","PARAMETRES");
    this.selector = <string>localStorage.getItem("selector");
    this.addNewItem("PARAMETRES");
  }

  onEdition() {
    this.progress = 100;
    localStorage.setItem("selector","EDITION");
    this.selector = <string>localStorage.getItem("selector");
    this.addNewItem("EDITION");
  }

  addNewItem(change : string){
    this.selecteur.emit(change);
  }
}
