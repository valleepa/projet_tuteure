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
  error = false
  id: number = 0;

  constructor(service:EditUserService,router:Router) { this.service = service;this.router = router}

  ngOnInit(): void {
  }

  findUser(){
    this.username = !isNaN(Number(this.username)) ? Number(this.username) : this.username;
    if(Number.isInteger(this.username) && Number(this.username) > 0){
      this.service.getUserFromId(this.username).subscribe(r =>{
        if(r != null) {
          this.id = r;
          this.error = false;
          this.router.navigate([`users/edit/${this.id}`])
          this.id = 0;
          this.username = "";
        }
        else {this.errorMessage = "Utilisateur inconnu"; this.error = true}
      })
    }
    else{
      this.service.getUserFromUsername(this.username).subscribe(r =>{
        if(r != null) {
          this.id = r;
          this.error = false;
          this.router.navigate([`users/edit/${this.id}`])
          this.id = 0;
          this.username = "";
        }
        else {this.errorMessage = "Utilisateur inconnu"; this.error = true}
      })
    }
  }

}
