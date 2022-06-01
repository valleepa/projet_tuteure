import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../Services/authentication.service";

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.component.html',
  styleUrls: ['./monprofil.component.scss']
})
export class MonprofilComponent implements OnInit {
  hide = true;
  hide_2 = true;
  hide_3 = true;
  isModifying:Boolean = false
  public username: any;
  public firstname : any;
  public secondname : any;
  public email: any;
  public id: any;

  constructor() { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem("USERNAME")
    this.firstname = sessionStorage.getItem("PRENOM")
    this.secondname = sessionStorage.getItem("NOM")
    this.email = sessionStorage.getItem("EMAIL")
    this.id = sessionStorage.getItem("ID")
  }

  modify():void{
    this.isModifying = true ? this.isModifying==false : this.isModifying = false;
  }

  save():void{
    this.isModifying = true ? this.isModifying==false : this.isModifying = false;
    // this.etudiant.nom = this.nom;
    // this.etudiant.prenom = this.prenom;
    // this.etudiant.numero = this.numero;
    // this.etudiant.classe = this.class;
    // this.etudiant.group = this.group;
  }
}
