import { Component, OnInit } from '@angular/core';
import {EditUserService} from "../../../Services/edit-user.service";
import {Router, ROUTES} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  private service: EditUserService;
  username: any;
  router: Router;
  errorMessage = ""

  constructor(service:EditUserService,router:Router) { this.service = service;this.router = router}

  ngOnInit(): void {
  }

  findUser(){
    if(Number.isInteger(this.username) && Number(this.username) > 0){
      if(this.service.getUserFromId(this.username)){
        this.router.navigate([`/users/edit/${this.username}`])
      }
      else{
        this.errorMessage = "Impossible de trouver l'utilisateur"
      }
    }
    else{
      if(this.service.getUserFromUsername(/*this.username.getId() > 0*/ "ze")){
        this.router.navigate([`/users/edit/${this.username}`])
      }
      else{
        this.errorMessage = "Impossible de trouver l'utilisateur"
      }
    }
  }

}
