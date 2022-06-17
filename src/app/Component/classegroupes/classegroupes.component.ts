import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ClasseService} from "../../Services/classe.service";
import {Classe, IClasse} from "../../Modeles/CLASSE";
import {IGroupe} from "../../Modeles/GROUPE";
import {GroupeService} from "../../groupe.service";

@Component({
  selector: 'app-classegroupes',
  templateUrl: './classegroupes.component.html',
  styleUrls: ['./classegroupes.component.scss']
})
export class ClassegroupesComponent implements OnInit {
  id = sessionStorage.getItem("ID");
  classes: IClasse[] = [];
  groupes: IGroupe[] = [];
  dataSource!: MatTableDataSource<IClasse>;
  displayedColumns: string[] = ['name', 'partOf', 'join','groupes'];
  displayedColumnsGroupes: string[] = ['name', 'partOf', 'join'];
  constructor(private classeService: ClasseService, private groupeService: GroupeService) {}

  ngOnInit(): void {
    this.classeService.getClasses().subscribe(r=>{
      for(let i = 0; i < r.length ; i++){
        r[i].professeurs.forEach(user=>{
          if(user.id == this.id){
            r[i].estmaclasse = true;
          }
        })
        this.classes.push(r[i]);
        this.dataSource = new MatTableDataSource<IClasse>(this.classes)
      }
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.nomClasse.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showGroups(classe: Classe) {
    this.groupeService.getGroupes(classe).subscribe(r=>{
      for(let i = 0; i < r.length ; i++) {
        r[i].professeurs.forEach(user => {
          if (user.id == this.id) {
            r[i].estmongroupe = true;
          }
        })
      }
      this.groupes = r;
      console.log(this.groupes)
    })
  }

  ownClasse() {

  }

  openDialog() {

  }

  ownGroup() {

  }
}
