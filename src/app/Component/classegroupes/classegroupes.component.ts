import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ClasseService} from "../../Services/classe.service";
import {Classe, IClasse} from "../../Modeles/CLASSE";
import {Groupe, IGroupe} from "../../Modeles/GROUPE";
import {GroupeService} from "../../groupe.service";
import {GestionUsersService} from "../../Services/gestion-users.service";
import {IUser, User} from "../../Modeles/USER";
import {group} from "@angular/animations";

@Component({
  selector: 'app-classegroupes',
  templateUrl: './classegroupes.component.html',
  styleUrls: ['./classegroupes.component.scss']
})
export class ClassegroupesComponent implements OnInit {
  id = sessionStorage.getItem("ID");
  classes: IClasse[] = [];
  groupes: IGroupe[] = [];
  user: User | null= new User('','','','','',false,null);
  dataSource!: MatTableDataSource<IClasse>;
  displayedColumns: string[] = ['name', 'partOf', 'join','groupes'];
  displayedColumnsGroupes: string[] = ['name', 'partOf', 'join'];
  constructor(private classeService: ClasseService, private groupeService: GroupeService, private userService:GestionUsersService) {}

  ngOnInit(): void {
    if(this.id != null){
      this.userService.getUserFromId(<number><unknown>this.id).subscribe(r=>{
        this.user = r;
      });
    }
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

  ownClasse(classe : Classe) {
    if(this.user != null){
      classe.professeurs.push(this.user);
    }
    console.log(this.user);
    this.classeService.ownClasse(classe).subscribe((r) => {
      classe.estmaclasse = r != null;
    })
  }

  openDialog() {

  }

  ownGroup(groupe: Groupe) {
    if(this.user != null){
      groupe.professeurs.push(this.user);
    }
    console.log(this.user);
    this.groupeService.ownGroupe(groupe).subscribe((r) => {
      groupe.estmongroupe = r != null;
    })
  }
}
