import { Component, OnInit, Input } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AuthenticationService} from "../../Services/authentication.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isOpen:boolean=true;
  // @ts-ignore

  isLoggedIn$: boolean

  constructor(private observer: BreakpointObserver, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = Number(this.auth.getId()) > 0
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 80rem)']).subscribe((res) => {
      if (res.matches) {
        this.isOpen=false;
      } else {
        this.isOpen=true;
      }
    })
  }

  navOpen($event:any): void {
    // toggle condition here
    this.isOpen = !this.isOpen;
  }
}





