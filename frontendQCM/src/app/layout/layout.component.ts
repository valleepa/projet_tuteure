import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isOpen:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  navOpen($event:any): void {
    // toggle condition here
    this.isOpen = !this.isOpen;
    console.log('$navOpen');
  }

}
