import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../Services/authentication.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  username: string | undefined;
  password : string | undefined;
  errorMessage = 'Invalid Credentials';
  successMessage: string | undefined;
  invalidLogin = false;
  loginSuccess = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

  ngOnInit(): void {
  }

  connexion() {
    if (this.username != null && this.password != null) {
      this.authenticationService.authenticationService(this.username, this.password).subscribe(r => {
        console.log(r)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        this.router.navigate(['']).then(() => window.location.reload());
      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
    }
  }
}
