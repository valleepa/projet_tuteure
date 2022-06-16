import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {QCM} from "../../Modeles/QCM";
import {QcmService} from "../../Services/qcm.service";
import {InputDialogComponent} from "../Accueil/input-dialog/input-dialog.component";
import {QuestionService} from "../../Services/question.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  id = sessionStorage.getItem("ID");
  qcms: QCM[] = [];
  qcm = <QCM>{};
  dataSource!: MatTableDataSource<QCM>;
  displayedColumns: string[] = ['name', 'modify', 'mark'];
  constructor(public dialog: MatDialog,private service: QcmService, private questionService: QuestionService, private router: Router) {
  }

  ngOnInit(): void {
    this.qcm.titre = "QCM1";
    this.qcm.id = 1;
    this.qcms.push(this.qcm);


    if(this.id != null){
      this.service.getQCMFromUser(this.id).subscribe(r => {
        this.qcms = r;
        this.qcms.forEach(each => {
          this.dataSource = new MatTableDataSource<QCM>(this.qcms)
        })
      })
    }
  }
  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.titre.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
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
      this.router.navigate(['/creation',result])
    });

  }

  onCorrection(qcm: QCM)
  {
    this.router.navigate([`/correction/${qcm.id}`]);
  }

}
