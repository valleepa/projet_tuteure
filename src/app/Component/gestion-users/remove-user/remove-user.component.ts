import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GestionUsersService} from "../../../Services/gestion-users.service";

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {
  username: any;
  router: Router;
  errorMessage = ""
  error = false
  id: number = 0;

  constructor(private service:GestionUsersService,router:Router) {this.router = router}

  ngOnInit(): void {
  }

  removeUser(){
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
  }
}
