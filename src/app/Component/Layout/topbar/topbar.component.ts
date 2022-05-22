import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  showDropDown: boolean = false;

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

  onDisplayDropdown()
  {
    this.showDropDown = !this.showDropDown;
  }

  onMouseEnter()
  {
    this.showDropDown = true;
  }

  onMouseLeave()
  {
    this.showDropDown = false;
  }
}
