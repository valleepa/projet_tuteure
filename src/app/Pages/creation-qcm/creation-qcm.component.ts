import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QcmService} from "../../Services/qcm.service";
import {QuestionService} from "../../Services/question.service";
import {QCM} from "../../Modeles/QCM";

@Component({
  selector: 'app-creation-qcm',
  templateUrl: './creation-qcm.component.html',
  styleUrls: ['./creation-qcm.component.scss']
})
export class CreationQCMComponent implements OnInit {
  name : string = "bam";
  isNotSaved: boolean = true;
  qcmLocal: QCM|undefined;
  qcmBd: QCM|undefined;
  constructor(public route:ActivatedRoute,private questionService: QuestionService, private qcmService: QcmService) { }

  ngOnInit(): void {
    this.name = <string>this.route.snapshot.paramMap.get('name');
    this.questionService.QCMActuel.subscribe(res =>{
      this.qcmLocal = res;
      if(this.qcmLocal.id){
        this.qcmService.getQCMFromId(this.qcmLocal.id).subscribe(res => this.qcmBd = res);
        if(JSON.stringify(this.qcmLocal) === JSON.stringify((this.qcmBd))){
          this.isNotSaved = false;
        }
      }
    })
  }

  checkSave() {
    if(this.qcmLocal?.id){
      this.qcmService.modifyQCM(this.qcmLocal);
    }
    else{
      if(this.qcmLocal)
        this.qcmLocal.titre = this.name;
      this.qcmService.createNewQCM(this.qcmLocal!).subscribe(res => {
        this.questionService.QCMActuel.next(res);
        this.qcmLocal = res;
      });
    }
  }
}
