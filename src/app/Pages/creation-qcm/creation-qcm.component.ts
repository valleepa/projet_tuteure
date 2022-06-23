import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QcmService} from "../../Services/qcm.service";
import {QuestionService} from "../../Services/question.service";
import {QCM} from "../../Modeles/QCM";
import {Options} from "../../Modeles/OPTIONS";
import {Option} from "../../Modeles/OPTION";
import {NotificationService} from "../../Services/notification.service";
import {DialogDeleteComponent} from "../../Component/dialog-delete/dialog-delete.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-creation-qcm',
  templateUrl: './creation-qcm.component.html',
  styleUrls: ['./creation-qcm.component.scss']
})
export class CreationQCMComponent implements OnInit,AfterViewInit {
  name : string = "bam";
  isNotSaved: boolean = true;
  qcmLocal: QCM|undefined;
  qcmBd: QCM|undefined;
  constructor(private dialog:MatDialog, public route:ActivatedRoute, private notificationService: NotificationService, private questionService: QuestionService, private qcmService: QcmService, public router:Router) { }

  ngOnInit(): void {
    this.name = <string>this.route.snapshot.paramMap.get('name');
    this.questionService.QCMActuel.subscribe(res =>{
      this.qcmLocal = res;
      this.questionService.isNotSaved.subscribe(res => {
        this.isNotSaved = res
      });
    });

  }

  checkSave() {
    if(this.isNotSaved){
      if(this.qcmLocal?.id){
        this.qcmLocal.categories.forEach(categorie=>{
          categorie.questions.forEach(question =>{
            question.options = new Options(question.typeDeQuestion,[]);
          })
        })
        this.qcmService.modifyQCM(this.qcmLocal).subscribe(res=>{
          this.notificationService.successMessage(this.qcmLocal?.titre+" SAUVEGARDÉ AVEC SUCCÈS");
        });
        this.questionService.isNotSaved.next(false);
      }
      else{
        if(this.qcmLocal)
          this.qcmLocal.titre = this.name;
        this.qcmService.createNewQCM(this.qcmLocal!).subscribe(res => {
          this.notificationService.successMessage(this.qcmLocal?.titre+" CRÉÉ AVEC SUCCÈS")
          this.qcmService.getQCMFromId(res).subscribe(r=>{
            this.questionService.reloadQCM(r);
            this.qcmLocal = r;
          })
        });
        this.questionService.isNotSaved.next(false);
      }
    }
  }

  deleteQcm() {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: {
        title: 'Supprimer de façon permanente cette application?',
        text: 'Attention vous êtes sur le point de supprimer définitivement un QCM ainsi que ses données du serveur !',
        button: 'Supprimer',
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.qcmLocal?.id) {
          this.qcmService.deleteQCM(this.qcmLocal).subscribe(res => this.notificationService.successMessage("Le QCM " + this.qcmLocal?.titre + " a bien été supprimé"));
        }
        this.router.navigate(["/"]);
      }
        });
  }

  ngAfterViewInit(): void {
    if(this.qcmLocal?.id){
      this.questionService.isNotSaved.next(false);
    }
  }
}
