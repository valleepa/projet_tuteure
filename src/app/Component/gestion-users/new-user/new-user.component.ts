import { Component, OnInit } from '@angular/core';
import {GestionUsersService} from "../../../Services/gestion-users.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  private service: GestionUsersService;
  error: boolean = false;
  errorMessage= "";
  resultMessage="";
  username: any;
  email: any;
  name: any;
  surname: any;
  password: any;

  constructor(service:GestionUsersService) { this.service = service}

  ngOnInit(): void {
  }

  create() {
    let valuestuavoid = [null, ""]

    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    this.password = "";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      this.password += chars.substring(randomNumber, randomNumber +1);
    }

    if(valuestuavoid.indexOf(this.username) != -1 ||valuestuavoid.indexOf(this.email) != -1 || valuestuavoid.indexOf(this.name) != -1 || valuestuavoid.indexOf(this.surname) != -1 ){
      this.error = true;
      this.errorMessage = "Merci de remplir tous les champs"
    }
    else{
      this.service.createUser(this.username,this.email,this.name,this.surname,this.password).subscribe(r=>{
          if(r == "-2"){
            this.error = true
            this.errorMessage = "Merci de composer un email correctement formé"
          }
          else if(r == "-3"){
            this.error = true
            this.errorMessage = "Email déjà utilisé"
          }
          else if(r == "-4"){
            this.error = true
            this.errorMessage = "Impossible de créer un administrateur"
          }

          else{
            this.resultMessage=`Nouvel utilisateur créé sous l'id ${r} \n Le mot de passe généré automatiquement est le suivant : ${this.password}`
          }
        },()=>{
          this.error = true
          this.errorMessage = "Erreur"
        }
      )
    }

  }
}
