import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.scss']
})
export class CorrectionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }



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
      console.log(id);
    }

  }


  }

}
