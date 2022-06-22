import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import testPdf from '../../../../assets/pdf/Test.pdf';
import {Router} from "@angular/router";
import {QCM} from "../../../Modeles/QCM";
import {QcmService} from "../../../Services/qcm.service";
import {QuestionService} from "../../../Services/question.service";

@Component({
  selector: 'app-creation-editions',
  templateUrl: './creation-editions.component.html',
  styleUrls: ['./creation-editions.component.scss']
})
export class CreationEditionsComponent implements OnInit {
  qcm : QCM | undefined;
  constructor(public sanitizer:DomSanitizer, public questionService:QuestionService, public qcmService:QcmService) {
  }

  pdf : SafeResourceUrl | null= null;
  isGenerate: boolean = false;

  ngOnInit(): void {
    this.questionService.QCMActuel.subscribe(r=>{
      this.qcm =r;
    });
  }

  generateQCM() {
    if(this.qcm != undefined){
      console.log("GENERATE")
      this.qcmService.generateNewQCM(this.qcm).subscribe(r=>{
        if(r != null){
          this.isGenerate = true;
          this.qcmService.getPDFFromIdAndId(this.qcm?.idcreateur,this.qcm?.id).then(r=>{
              this.pdf = r;
              let url = window.URL.createObjectURL(r);
              this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
          )
        }
        else{
          this.isGenerate = false;
          this.pdf = null;
        }
      });
      this.isGenerate = false;
    }
  }
}

