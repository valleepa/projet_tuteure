import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GestionUsersService} from "../../../Services/gestion-users.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  username: any;
  router: Router;
  errorMessage = ""
  error = false
  id: Object = 0;
  message = "";

  constructor(private service:GestionUsersService,router:Router) {this.router = router}

  ngOnInit(): void {
  }

  resetPassword(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }

    let user;
    this.service.getUserFromId(this.username).subscribe(rId =>{
      if(rId != null) {
        rId.password = password
        this.service.resetPassword(rId).subscribe(r =>{
          if(r != null){
            this.id = r;
            this.error = false;
            this.id = 0;
            this.username = "";
            this.message = `Le mot de passe à bien été mis à jour. \n Le nouveau mot de passe est : ${password}`
          }
        })
      }
      else {this.errorMessage = "Utilisateur inconnu"; this.error = true}
    })
  }

}
