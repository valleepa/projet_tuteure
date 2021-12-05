import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-creation-title',
  templateUrl: './creation-title.component.html',
  styleUrls: ['./creation-title.component.scss']
})
export class CreationTitleComponent implements OnInit {
  @Input() title : string = '';
  @Input() selector : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
