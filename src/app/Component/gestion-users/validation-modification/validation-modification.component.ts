import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-validation-modification',
  templateUrl: './validation-modification.component.html',
  styleUrls: ['./validation-modification.component.scss']
})
export class ValidationModificationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<ValidationModificationComponent>) { }

  ngOnInit(): void {
  }

  validate() {
    this.dialogRef.close("close");
  }
}
