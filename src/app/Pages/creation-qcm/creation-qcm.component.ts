import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QcmService} from "../../Services/qcm.service";
import {QuestionService} from "../../Services/question.service";
import {QCM} from "../../Modeles/QCM";
import {Options} from "../../Modeles/OPTIONS";
import {Option} from "../../Modeles/OPTION";

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
  constructor(public route:ActivatedRoute, private notificationService: NotificationService, private questionService: QuestionService, private qcmService: QcmService, public router:Router) { }

  ngOnInit(): void {
    this.name = <string>this.route.snapshot.paramMap.get('name');
    this.questionService.QCMActuel.subscribe(res =>{
      this.qcmLocal = res;
      this.questionService.isNotSaved.subscribe(res => {
        console.log(res);
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
        this.qcmService.modifyQCM(this.qcmLocal).subscribe(r=>{
          console.log(r);
        });
        this.questionService.isNotSaved.next(false);
      }
      else{
        if(this.qcmLocal)
          this.qcmLocal.titre = this.name;
        console.log("avant"+this.qcmLocal);
        this.qcmService.createNewQCM(this.qcmLocal!).subscribe(res => {
          this.notificationService.successMessage(this.qcmLocal?.titre+" CRÉÉ AVEC SUCCÈS")
          this.qcmService.getQCMFromId(res).subscribe(r=>{
            this.questionService.reloadQCM(r);
            this.qcmLocal = r;
            console.log("apres"+res);
          })
        });
        this.questionService.isNotSaved.next(false);
      }
    }
  }

  deleteQcm() {
    console.log(this.qcmLocal);
    if(this.qcmLocal?.id){
      this.qcmService.deleteQCM(this.qcmLocal).subscribe(res=>this.notificationService.successMessage("Le QCM "+this.qcmLocal?.titre+" a bien été supprimé"));
    }
    this.router.navigate(["/"]);

  }

  ngAfterViewInit(): void {
    if(this.qcmLocal?.id){
      this.questionService.isNotSaved.next(false);
    }
  }
}
