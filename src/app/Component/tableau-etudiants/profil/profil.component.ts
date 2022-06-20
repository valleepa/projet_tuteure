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
  numero:number= this.etudiant.nOEtudiant;
  ngOnInit(): void {
  }

  modify():void{
    this.isModifying = true ? this.isModifying==false : this.isModifying = false;
  }

  save():void{
    this.isModifying = true ? this.isModifying==false : this.isModifying = false;
    this.etudiant.nom = this.nom;
    this.etudiant.prenom = this.prenom;
    this.etudiant.nOEtudiant = this.numero;
    this.etudiant.classe = this.class;
    this.etudiant.groupe = this.group;
  }

}
