import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Etudiant, IEtudiant} from "../../Modeles/ETUDIANTS";
import {Router} from "@angular/router";
import {EtudiantsService} from "../../Services/etudiants.service";

@Component({
  selector: 'app-tableau-etudiants',
  templateUrl: './tableau-etudiants.component.html',
  styleUrls: ['./tableau-etudiants.component.scss']
})
export class TableauEtudiantsComponent implements OnInit {
  etudiants: IEtudiant[] = [];
  etudiant = new Etudiant(1, "FA2", "B", "Stengel", "Damien", 22001693);
  dataSource!: MatTableDataSource<IEtudiant>;
  displayedColumns: string[] = ['name', 'class', 'group', 'profil'];

  constructor(private router: Router, private etudiantsService: EtudiantsService) { }

  ngOnInit(): void {
    this.etudiants.push(this.etudiant);
    this.dataSource = new MatTableDataSource<IEtudiant>(this.etudiants)
  }
  showProfil(etudiant:Etudiant):void{
    this.etudiantsService.etudiantActuel = etudiant;
    this.router.navigate(['/etudiants/profil/'+ etudiant.nom]);
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.nom.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
