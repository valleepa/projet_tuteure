import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QCM } from 'src/app/Modeles/QCM';
import { QcmService } from 'src/app/Services/qcm.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  qcmId! : number;
  qcm? : QCM;
  files = [new File([],'eleve1.pdf'),new File([],'eleve2.pdf')];

  constructor(private router: Router, private qcmService : QcmService) { }

  ngOnInit(): void {
    const urlParts = this.router.url.split("/");
    const id = Number.parseInt(urlParts[urlParts.length-1]);
    
    if(Number.isNaN(id))
    {
      this.router.navigate(['mesqcm']);
    }
    else {
      this.qcmId = id;
      this.qcmService.getQCMFromId(this.qcmId)
      .subscribe(qcm => 
        {
          this.qcm = qcm as QCM;          
          if(this.qcm == undefined)
          {
            this.router.navigate(['mesqcm']);
          }
          //todo: appeler méthode getCorrections()
        });
    }
  }

  onDownloadAll()
  {
    //todo: appeler permettre le téléchargement
  }

}
