import { Component, OnInit, Input } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isOpen:boolean=true;
  // @ts-ignore

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
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
    console.log('$navOpen');
  }
}





