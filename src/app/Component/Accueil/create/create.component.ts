import { QuestionService } from './../../../Services/question.service';
import {Component, Input, OnInit} from '@angular/core';
import {MatDialog,MatDialogRef} from "@angular/material/dialog";
import {InputDialogComponent} from "../input-dialog/input-dialog.component";
import {Router} from "@angular/router";
import { QCM } from 'src/app/Modeles/QCM';
import { Categorie } from 'src/app/Modeles/CATEGORIE';
import { Question } from 'src/app/Modeles/QUESTION';
import {AuthenticationService} from "../../../Services/authentication.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  name: string = 'boom';
  qcm: QCM|undefined;
  @Input() titre = '';
  @Input() image = '';
  @Input() type = '';

  constructor(public dialog: MatDialog, public router: Router, private questionService : QuestionService, private authentificationService: AuthenticationService) { }

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
          localStorage.removeItem("selector");
          localStorage.removeItem('QCM');
          this.questionService.QCMActuel.next(QCM.createEmptyQCM());
          this.questionService.QCMActuel.subscribe(res=>{
            this.qcm = res;
            this.qcm.idcreateur = this.authentificationService.getId()!;
          });
          this.router.navigate(['/creation',result])
      });
    }

  }

  ngOnInit(): void {
  }
}
