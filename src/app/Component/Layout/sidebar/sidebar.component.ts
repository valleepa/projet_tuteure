import { Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges {
  constructor() {}

  // @ts-ignore
  @ViewChild('sidenav') public sidenav: MatSidenav;


  @Input()
    // @ts-ignore
  openNav: boolean;

  ngOnChanges(): void {
    if (this.openNav) {
      this.sidenav?.open();
    } else {
      this.sidenav?.close();
    }
  }

}
