import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-creation-card',
  templateUrl: './creation-card.component.html',
  styleUrls: ['./creation-card.component.scss']
})
export class CreationCardComponent implements OnInit {
  @Input() title : string = '';
  @Input() selector : string = <string>localStorage.getItem("selector");
  constructor() { }

  ngOnInit(): void {
  }

}
