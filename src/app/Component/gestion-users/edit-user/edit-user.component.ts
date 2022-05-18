import { Component, OnInit } from '@angular/core';
import {EditUserService} from "../../../Services/edit-user.service";
import {Router, ROUTES} from "@angular/router";
import {GestionUsersService} from "../../../Services/gestion-users.service";
import {MatDialog} from "@angular/material/dialog";
import {ValidationDialogComponent} from "../validation-dialog/validation-dialog.component";
import {QCM} from "../../../Modeles/QCM";
import {ValidationModificationComponent} from "../validation-modification/validation-modification.component";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  username: any;
  router: Router;
  errorMessage = ""
  error = false
  id: any;
  message = "";

  constructor(private service:GestionUsersService,router:Router, public dialog: MatDialog) {;this.router = router}

  ngOnInit(): void {
  }

  open_dialogue_suppression():void{
    const dialogRef = this.dialog.open(ValidationDialogComponent, {
      width: '40%',
      height:'20%',
      panelClass: 'custom-dialog-container',
      data: {button: 'Supprimer', buttonAnnuler: 'Annuler', text:'Voulez-vous vraiment supprimer cet utilisateur ?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.service.removeUserFromIdOrUsername(this.username).subscribe(r =>{
          console.log(r)
          if(r != null) {
            this.id = r;
            this.error = false;
            this.id = 0;
            this.username = "";
          }
          else {this.errorMessage = "Utilisateur inconnu"; this.error = true}
        })
    }});
  }

  open_dialogue_resiliation():void{
    const dialogRef = this.dialog.open(ValidationDialogComponent, {
      width: '50%',
      height:'25%',
      panelClass: 'custom-dialog-container',
      data: {button: 'Réinitialiser', buttonAnnuler: 'Annuler', text:'Voulez-vous vraiment réinitialiser le mot de passe de cet utilisateur ?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.resetPassword(this.username)
      }});
  }


  resetPassword(username:any) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }

    let user;
    this.service.getUserFromId(username).subscribe(rId => {
      if (rId != null) {
        rId.password = password
        this.service.resetPassword(rId).subscribe(r => {
          if (r != null) {
            this.id = r;
            this.error = false;
            this.id = 0;
            this.username = "";
            this.message = `Le mot de passe à bien été mis à jour. \n Le nouveau mot de passe est : ${password}`
          }
        })
      } else {
        this.errorMessage = "Utilisateur inconnu";
        this.error = true
      }
    })
  }

  open_dialogue_modification():void{
    const dialogMod = this.dialog.open(ValidationModificationComponent, {
      width: '40%',
      height:'20%',
      panelClass: 'custom-dialog-container',
    });

    dialogMod.afterClosed().subscribe(result => {
      if(result){
        //TODO fonction de modification des users
      }});

  }

  findUser(){
    this.service.getIdFromId(this.username).subscribe(r => {
      if (r != null) {
        this.id = r;
        this.error = false;
        this.router.navigate([`users/edit/${this.id}`], {state: {id: this.id}})
        this.id = 0;
        this.username = "";
      }
      else {
        this.errorMessage = "Utilisateur inconnu";
        this.error = true
      }
    })
  }

}
