import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Etudiant, IEtudiant} from "../../Modeles/ETUDIANTS";

@Component({
  selector: 'app-tableau-etudiants',
  templateUrl: './tableau-etudiants.component.html',
  styleUrls: ['./tableau-etudiants.component.scss']
})
export class TableauEtudiantsComponent implements OnInit {
  etudiants: IEtudiant[] = [];
  etudiant = new Etudiant("FA2", "B", "Damien Stengel");
  dataSource!: MatTableDataSource<IEtudiant>;
  displayedColumns: string[] = ['name', 'class', 'group', 'profil'];

  constructor() { }

  ngOnInit(): void {
    this.etudiants.push(this.etudiant);
    this.dataSource = new MatTableDataSource<IEtudiant>(this.etudiants)
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
