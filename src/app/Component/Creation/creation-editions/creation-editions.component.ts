import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import testPdf from '../../../../assets/pdf/Test.pdf';
import {Router} from "@angular/router";
import {QCM} from "../../../Modeles/QCM";
import {QcmService} from "../../../Services/qcm.service";
import {QuestionService} from "../../../Services/question.service";
import {EtudiantsService} from "../../../Services/etudiants.service";
import {ClasseService} from "../../../Services/classe.service";
import {GroupeService} from "../../../groupe.service";
import {Groupe} from "../../../Modeles/GROUPE";
import {Classe} from "../../../Modeles/CLASSE";
import {MatSelectChange} from "@angular/material/select";
import {FormControl} from "@angular/forms";
import {CreationQCMComponent} from "../../../Pages/creation-qcm/creation-qcm.component";

@Component({
  selector: 'app-creation-editions',
  templateUrl: './creation-editions.component.html',
  styleUrls: ['./creation-editions.component.scss']
})
export class CreationEditionsComponent implements OnInit {
  qcm : QCM | undefined;
  id : any = sessionStorage.getItem('ID');
  groupes : Groupe[] = [];
  classes : Classe[] = [];
  selectedClasse : any = null;
  classesList: String[] = [];
  selectedGroupe : any = null;
  groupesList: String[] = [];
  classesForm = new FormControl('');
  groupesForm = new FormControl('');
  public errormessage: string = "";

  constructor(public sanitizer:DomSanitizer, public questionService:QuestionService, public qcmService:QcmService, public classeService:ClasseService,public groupeService : GroupeService, public creationQCMComponent :CreationQCMComponent) {
    if(this.id != null){
      this.classeService.getClassesFromUser(<number>this.id).subscribe(r=>{
        r.forEach(classe=>{
          this.classes.push(classe);
          this.classesList.push(classe.nomClasse)
        })
      })
    }


  }

  pdf : SafeResourceUrl | null= null;
  isGenerate: boolean = false;
  isGenerating: boolean = false;
  url: any;


  ngOnInit(): void {
    this.questionService.QCMActuel.subscribe(r=>{
      this.qcm =r;
    });
    if(!this.questionService.isNotSaved.value)
      this.qcmService.getPDFFromIdAndId(this.qcm?.idcreateur,this.qcm?.id).then(r=>{
          if(r.size != 0){
            let url = window.URL.createObjectURL(r);
            this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            this.isGenerate = true;
          }
          else{
            this.isGenerate = false;
            this.pdf = null;
          }
        }
      )
  }

  generateQCM() {
    let requ;
    if(!this.questionService.isNotSaved.value){
      if (this.qcm != undefined) {
        if (this.selectedClasse != undefined) {
          if (this.selectedGroupe != undefined) {
            requ = this.qcmService.generateNewQCM(this.qcm, this.selectedClasse.id, this.selectedGroupe.id);
          }
          else{
            requ = this.qcmService.generateNewQCM(this.qcm, this.selectedClasse.id, null);
          }
          this.isGenerating = true;
          requ.subscribe(r => {
            if (r != null) {
              this.isGenerate = true;
              this.qcmService.getPDFFromIdAndId(this.qcm?.idcreateur, this.qcm?.id).then(r => {
                  this.pdf = r;
                  let url = window.URL.createObjectURL(r);
                  this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                }
              )
            } else {
              this.isGenerate = false;
              this.pdf = null;
            }
            this.isGenerating = false;
          });
        }
        else{
          this.errormessage = "Merci de sélectionner une classe et éventuellement un groupe avant de générer un QCM";
        }
        this.isGenerate = false;
      }
    }
    else{
      this.errormessage = "Merci de sauvegarder le QCM avant de le générer"
    }
  }

  onClasseChange($event: MatSelectChange) {
    for(let i = 0 ; i < this.classes.length ; i++ ){
      if(this.classes[i].nomClasse == $event.value){
        this.selectedClasse = this.classes[i];
      }
    }

    this.groupesList = []
    if(this.selectedClasse != undefined){
      this.groupeService.getGroupesFromUser(this.id,this.selectedClasse.id).subscribe(r => {

        this.groupes = r;
        for(let i = 0 ; i < r.length ; i++){
          this.groupesList.push(r[i].nomGroupe)
        }
      })
    }
  }

  onGroupeChange($event: MatSelectChange) {
    for(let i = 0 ; i<this.groupes.length ; i++){
      if(this.groupes[i].nomGroupe == $event.value){
        this.selectedGroupe = this.groupes[i];
      }
    }
  }

  telechargerPdf() {
    window.open(this.url);
  }
}

