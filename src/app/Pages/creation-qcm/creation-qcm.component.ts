import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-creation-qcm',
  templateUrl: './creation-qcm.component.html',
  styleUrls: ['./creation-qcm.component.scss']
})
export class CreationQCMComponent implements OnInit {
  name : string = "bam";

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = <string>this.route.snapshot.paramMap.get('name');
  }

  public checkSelectorQuestions()
  {
    return localStorage.getItem('selector') == "QUESTIONS";
  }
  
}
