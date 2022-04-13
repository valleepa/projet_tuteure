import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {QuestionService} from "../../../Services/question.service";
import {Categorie} from "../../../Modeles/CATEGORIE";
import {BooleanInput} from "@angular/cdk/coercion";

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit {
  nom = new FormControl('', [Validators.required]);
  error!: string;
  categorie !: Categorie;
  invalide: BooleanInput = false;
  constructor(public dialogRef: MatDialogRef<InputDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private questionService :QuestionService) { }

  ngOnInit(): void {
    this.questionService.categorieActuel.subscribe(res => this.categorie = res);
  }

  onClick(name: string) {
    if(name){
      this.dialogRef.close(name);
    }
  }

  onChange(value: string) {
    this.invalide = false;
    this.categorie.questions.forEach(ques =>{
      if(ques.name === value){
        this.invalide = true;
        //TODO snack bar en cas d'erreur
      }

    })
  }
}
