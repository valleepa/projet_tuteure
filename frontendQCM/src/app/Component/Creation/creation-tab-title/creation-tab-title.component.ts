import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-creation-tab-title',
  templateUrl: './creation-tab-title.component.html',
  styleUrls: ['./creation-tab-title.component.scss']
})
export class CreationTabTitleComponent implements OnInit {
  @Input() title : string = '';
  @Input() selector : string = <string>localStorage.getItem("selector");
  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem("selector"));
  }

}
