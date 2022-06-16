import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.scss']
})
export class CorrectionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  files : File[] = [];
  showOnlyPDFAcceptedError = false;


  qcmId! : number;

  ngOnInit(): void {
    const urlParts = this.router.url.split("/");
    const id = Number.parseInt(urlParts[urlParts.length-1]);
    if(Number.isNaN(id))
    {
      this.router.navigate(['mesqcm']);
    }
    else
    {
      this.qcmId = id;
      // TODO: call get on QCMService 
    }

  }

  fileBrowseHandler(e : Event)
  {
    const element = e.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if(fileList)
    {
      this.onFileDropped(fileList);
    }
  }

  onFileDropped(files : FileList)
  {
    this.showOnlyPDFAcceptedError = false;
    for(let i = 0; i < files.length; i++)
    {
      let file : File | null = files.item(i);      
      if(file)
      {            
        //TODO: check file size
        if(file?.type == "application/pdf")
        {
          this.files.push(file);
        }
        else
        {
          this.showOnlyPDFAcceptedError = true;
        }
      }  
    }
  }

  onDeleteFile(index: number)
  {
    this.files.splice(index,1);
  }

  onCorriger()
  {
    //TODO: handle correction
  }

}
