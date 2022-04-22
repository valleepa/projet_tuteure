import { Component, OnInit} from '@angular/core';
import {QuestionService} from "../../../Services/question.service";
import {Categorie} from "../../../Modeles/CATEGORIE";
import {Question} from "../../../Modeles/QUESTION";
import {QCM} from "../../../Modeles/QCM";

interface Choix {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  nom: string;
  nombre: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nom: 'Arithmétique', nombre: 5},
  {nom: 'Logique', nombre: 6}
];

@Component({
  selector: 'app-creation-parametres',
  templateUrl: './creation-parametres.component.html',
  styleUrls: ['./creation-parametres.component.scss']
})
export class CreationParametresComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'nombre'];
  dataSource = ELEMENT_DATA;
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
      this.questionService.categorieActuel.subscribe(val =>{
        this.categorie = val;
      });
    });
  }

  modifyEntete(value: string) {
    this.QCM.entete = value;
    this.questionService.reloadQCM(this.QCM);
  }

  melangeChange() {

  }
}
