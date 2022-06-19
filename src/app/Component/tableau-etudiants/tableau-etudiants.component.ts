import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Etudiant, IEtudiant} from "../../Modeles/ETUDIANTS";
import {Router} from "@angular/router";
import {EtudiantsService} from "../../Services/etudiants.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogCreateComponent} from "./dialog-create/dialog-create.component";
import {group} from "@angular/animations";
import {GroupeService} from "../../groupe.service";
import {Classe} from "../../Modeles/CLASSE";
import {ClasseService} from "../../Services/classe.service";
import {Groupe} from "../../Modeles/GROUPE";

@Component({
  selector: 'app-tableau-etudiants',
  templateUrl: './tableau-etudiants.component.html',
  styleUrls: ['./tableau-etudiants.component.scss']
})

export class TableauEtudiantsComponent implements OnInit {
  id = sessionStorage.getItem("ID");
  etudiants: IEtudiant[] = [];
  dataSource!: MatTableDataSource<IEtudiant>;
  classes:Classe[] = [];
  groupes:Groupe[] = [];
  classesAndGroupes = {} as IDictionary;
  displayedColumns: string[] = ['name','surname','numetu', 'class', 'group', 'profil'];
  added: number = -1;

  constructor(public dialog: MatDialog, private router: Router, private etudiantsService: EtudiantsService, private groupeService: GroupeService, private classeService:ClasseService) { }

  ngOnInit(): void {
    if(this.id != null){
      this.etudiantsService.getEtudiantFromUser(this.id).subscribe(r=>{
        for(let i = 0; i < r.length ; i++){
            this.etudiants.push(r[i]);
            this.dataSource = new MatTableDataSource<IEtudiant>(this.etudiants)
        }
      });
    }

    this.classeService.getClassesFromUser(Number(this.id)).subscribe(r=>{
      this.classes = r;
      this.classes.forEach(each=>{
        this.groupeService.getGroupesFromUser(each.id,Number(this.id)).subscribe(r=>{
          this.classesAndGroupes[each.nomClasse] = [];
          r.forEach(eachg=>{
            this.classesAndGroupes[each.nomClasse].push(eachg.nomGroupe);
          })
        })
      })
    })


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

  openDialog() : void {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      data: { title: "Création d'un étudiant"}
    });
    dialogRef.afterClosed().subscribe(
      result => {
        if(result != ""){
          this.etudiants.push(result);
          this.dataSource.data = this.etudiants;
        }
      }
    );
  }

  file:any;
  fileChanged($event:any) {
    this.file = $event.target.files[0]
  }

  uploadDocument(file:any) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      (this.validateCSV(fileReader.result).then((value => {
        this.added = value;
      })));
    }
    fileReader.readAsText(file);
  }

  async validateCSV(csv: String | ArrayBuffer | null) {
    if (typeof csv === 'string') {
      let added = 0;
      let lines: String[] = csv.split("\n");
      for (let i = 0; i < lines.length; i++) {
        let values = lines[i].split(";");
        if (values.length == 5 && !isNaN(Number(values[2]))) {
          const t = await this.etudiantsService.createEtudiant({
            "nom": values[0],
            "prenom": values[1],
            "noetudiant": values[2],
            "classe": values[3],
            "groupe": values[4]
          }).toPromise();
          if(t != null){
            added += 1;
            this.etudiants.push(new Etudiant(t.id,t.classe,t.groupe,t.nom,t.prenom,t.noetudiant))
            this.dataSource.data = this.etudiants;
          }
        }
      }
      return added;
    }
    return -1;
  }

  onCSVSubmit() {
    if(this.file){
      this.uploadDocument(this.file);
    }
  }
}

interface IDictionary {
  [index: string]: string [];
}
