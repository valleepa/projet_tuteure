import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet';
  constructor(
    private keycloakService : KeycloakService){}

  logout() {
    this.keycloakService.logout();
  }

  getDroit() {

  }
}

