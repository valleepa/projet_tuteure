import { Component, OnInit} from '@angular/core';

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

  choix: Choix[] = [
    {value: 'oui-0', viewValue: 'Oui'},
    {value: 'non-1', viewValue: 'Non'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
