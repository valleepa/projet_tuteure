import { Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionService} from "../../../Services/question.service";
import {Categorie} from "../../../Modeles/CATEGORIE";
import {Question} from "../../../Modeles/QUESTION";
import {QCM} from "../../../Modeles/QCM";
import {Reponse} from "../../../Modeles/REPONSE";
import {MatTableDataSource} from "@angular/material/table";

interface Choix {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  nom: string;
  nombre: number;
}



@Component({
  selector: 'app-creation-parametres',
  templateUrl: './creation-parametres.component.html',
  styleUrls: ['./creation-parametres.component.scss']
})
export class CreationParametresComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'nombre', 'total'];
  dataSource!: MatTableDataSource<Categorie>;
  QCM !: QCM;
  categorie!: Categorie;
  question!: Question;

  choix: Choix[] = [
    {value: 'oui-0', viewValue: 'Oui'},
    {value: 'non-1', viewValue: 'Non'},
  ];
  selected: string = 'non-1';

  constructor( private questionService: QuestionService) { }
  ngOnInit(): void {
    this.questionService.QCMActuel.subscribe(value => {
      this.QCM = value;
      this.dataSource = new MatTableDataSource<Categorie>(this.QCM.categories);
      this.selected = this.QCM.isRandomized ===false ? "non-1" : "oui-0";
      this.questionService.categorieActuel.subscribe(val =>{
        this.categorie = val;
      });
    });
  }

  modifyEntete(value: string) {
    this.QCM.entete = value;
    this.questionService.reloadQCM(this.QCM);
  }

  /*modifyDuree(value: string) {
    if(this.isNumber(value)){
      if(this.question.reponses.length>0){
        this.question.reponses[0].contain = value;
      }
      else{
        this.question.reponses[0] = new Reponse(value,true);
      }
      this.reponseNum = this.question.reponses[0].contain;
      this.questionService.reloadQCM(this.QCM);
    }
    else{
      // @ts-ignore
      document.getElementById("reponse").value = this.reponseNum;
    }
  }
  isNumber(str: string): boolean {
    if (typeof str !== 'string') {
      return false;
    }

    if (str.trim() === '') {
      return false;
    }
    return !Number.isNaN(Number(str));
  }
*/
  setChange(){
    this.QCM.isRandomized = (this.selected !== "non-1");
    this.questionService.QCMActuel.next(this.QCM);
  }
}
