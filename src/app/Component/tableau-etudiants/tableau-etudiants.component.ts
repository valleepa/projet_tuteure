import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ETUDIANTS} from "../../ETUDIANTS";

@Component({
  selector: 'app-tableau-etudiants',
  templateUrl: './tableau-etudiants.component.html',
  styleUrls: ['./tableau-etudiants.component.scss']
})
export class TableauEtudiantsComponent implements OnInit {
  etudiants: ETUDIANTS[] = [];
  etudiant = <ETUDIANTS>{};
  dataSource!: MatTableDataSource<ETUDIANTS>;
  displayedColumns: string[] = ['name', 'class', 'group', 'profil'];

  constructor() { }

  ngOnInit(): void {
    this.etudiant.name = "Damien Stengel";
    this.etudiant.class = "FA2";
    this.etudiant.group = "FA2-1";
    this.etudiants.push(this.etudiant);
    this.dataSource = new MatTableDataSource<ETUDIANTS>(this.etudiants)
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
