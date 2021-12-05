import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output()
  open: EventEmitter<boolean>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  clickMenu() {
    this.open.emit(true);
  }
}
