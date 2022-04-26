import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.scss']
})
export class BoutonComponent implements OnInit {
  @Input() name = '';
  @Input() select:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
