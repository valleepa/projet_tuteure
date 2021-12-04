import {Component, Input, OnInit} from '@angular/core';
import {MatDialog,MatDialogRef} from "@angular/material/dialog";
import {InputDialogComponent} from "../input-dialog/input-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  name: string = 'boom';
  @Input() titre = '';
  @Input() image = '';
  @Input() type = '';

  constructor(public dialog: MatDialog, public router: Router) { }

  openDialog(): void {
    if(this.type == 'creer'){
      const dialogRef = this.dialog.open(InputDialogComponent, {
        width: '35%',
        height:'17%',
        panelClass: 'custom-dialog-container',
        data: {button: 'Créer', placeholder: 'MON QCM', name:''},
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result)
          this.router.navigate(['/creation/'+result])
          console.log(result);
      });
    }

  }

  ngOnInit(): void {
  }
}
