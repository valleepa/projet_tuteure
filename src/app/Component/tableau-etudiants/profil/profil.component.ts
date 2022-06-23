import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from "../../../Services/etudiants.service";
import {Etudiant} from "../../../Modeles/ETUDIANTS";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  isModifying:Boolean = false

  constructor(private etudiantsService: EtudiantsService) { }

  etudiant:Etudiant = this.etudiantsService.etudiantActuel;
  id: number= this.etudiant.id;
  prenom:string = this.etudiant.prenom;
  nom:string = this.etudiant.nom;
  group:string = this.etudiant.groupe;
  class:string = this.etudiant.classe;
  numero:number= this.etudiant.noetudiant;
  ngOnInit(): void {
  }

  modify():void{
    this.isModifying = !this.isModifying;
  }

  save():void{
    this.isModifying = !this.isModifying;
    this.etudiantsService.editEtudiant(new Etudiant(this.id,this.class,this.group,this.nom,this.prenom,this.numero)).subscribe(r=>{
      if(r != null){
        this.etudiant = r
      }
      this.nom = this.etudiant.nom;
      this.prenom = this.etudiant.prenom;
      this.numero = this.etudiant.noetudiant;
      this.class = this.etudiant.classe;
      this.group = this.etudiant.groupe;
    })
  }

}
