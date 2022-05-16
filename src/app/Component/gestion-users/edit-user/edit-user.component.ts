import { Component, OnInit } from '@angular/core';
import {EditUserService} from "../../../Services/edit-user.service";
import {Router, ROUTES} from "@angular/router";
import {GestionUsersService} from "../../../Services/gestion-users.service";

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
  id: number = 0;

  constructor(private service:GestionUsersService,router:Router) {;this.router = router}

  ngOnInit(): void {
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
