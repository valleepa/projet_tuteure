import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GestionUsersService} from "../../Services/gestion-users.service";

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.scss']
})
export class GestionUsersComponent implements OnInit {
  private service: GestionUsersService;

  constructor(service:GestionUsersService) {
    this.service = service
  }

  ngOnInit(): void {
  }
}
