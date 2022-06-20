import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EditUserService} from "../../../../Services/edit-user.service";
import {User} from "../../../../Modeles/USER";
import {GestionUsersService} from "../../../../Services/gestion-users.service";

@Component({
  selector: 'app-edit-user-action',
  templateUrl: './edit-user-action.component.html',
  styleUrls: ['./edit-user-action.component.scss']
})
export class EditUserActionComponent implements OnInit {
  user : any;
  selectedField: any;
  fields = ["E-mail","Nom","Prénom","Nom d'utilisateur"];
  error: boolean = false;
  errorMessage: string = "";
  resultMessage: string = "";
  constructor(private route: ActivatedRoute, private service: GestionUsersService, private editUserService: EditUserService, private router: Router) {

    //Redirection dans le cas d'un accès direct via l'url
    if(this.router.getCurrentNavigation()?.extras.state == undefined){
      router.navigate(["users/edit"])
    }
  }

  ngOnInit(): void {
    this.route.url.subscribe(
      parts => {
        this.service.getUserFromId(Number.parseInt(parts[parts.length-1].path)).subscribe(r => {
          this.user = r
        })
      }
    )
  }

  onChange($event: any) {
    this.selectedField = $event
    console.log(this.user)
  }

  editUser() {
    this.editUserService.editUser(this.user).subscribe((r) => {
      if(r == "-2" || r == "-1"  || r == "-3" ){
        this.error = true
        this.errorMessage = "Merci de composer un email correctement formé"
      }
      else{
        this.resultMessage=`Utilisateur modifié avec succès`
      }
    });
  }
}
