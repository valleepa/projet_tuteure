import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.scss']
})
export class BoutonComponent implements OnInit {
  @Input() name = '';
  @Input() select:boolean = true;
  @Output() click = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.click.emit();
  }

}
