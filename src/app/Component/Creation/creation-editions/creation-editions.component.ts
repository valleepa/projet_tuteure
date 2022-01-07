import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import testPdf from '../../../../assets/pdf/Test.pdf';

@Component({
  selector: 'app-creation-editions',
  templateUrl: './creation-editions.component.html',
  styleUrls: ['./creation-editions.component.scss']
})
export class CreationEditionsComponent implements OnInit {

  constructor(public sanitizer:DomSanitizer) { }

  pdf = this.sanitizer.bypassSecurityTrustResourceUrl('assets/pdf/Test.pdf');

  ngOnInit(): void {
  }

}

