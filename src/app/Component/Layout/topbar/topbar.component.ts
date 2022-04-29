import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthenticationService} from "../../../Services/authentication.service";


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output()
  open: EventEmitter<boolean>=new EventEmitter()
  isLoggedIn = false
  name = ""
  isAdmin: any;
  constructor(
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    this.isAdmin = this.authenticationService.getAdmin()
    this.name = this.authenticationService.getName();
  }

  clickMenu() {
    this.open.emit(true);
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}
