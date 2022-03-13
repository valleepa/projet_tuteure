import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InputDialogComponent } from '../../Accueil/input-dialog/input-dialog.component';
import {Categorie, ICategorie} from "../../../CATEGORIE";
import {Question} from "../../../QUESTION";

@Component({
  selector: 'app-creation-questions',
  templateUrl: './creation-questions.component.html',
  styleUrls: ['./creation-questions.component.scss']
})
export class CreationQuestionsComponent implements OnInit {

  public categories : Categorie[] = [];
  image = 'assets/img/1.svg';
  titre = 'AJOUTER UNE CATEGORIE';
  selector : Categorie = new Categorie("null", [new Question("Question 1", "unique")]);
  selectorQ: Question = this.selector.questions[0];
  questions: Question[] = [];
  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.loadCategoriesFromStorage();
  }

  addCategorie(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height:'17%',
      panelClass: 'custom-dialog-container',
      data: {button: 'Créer', placeholder: 'Catégorie', name:''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.ajoutCategorie(result);
      }
      else{
        if(!(this.categories.length>0)){
          this.categories = [];
        }

      }
    });
  }

  addQuestion(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height:'17%',
      panelClass: 'custom-dialog-container',
      data: {button: 'Créer', placeholder: 'Question', name:''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.ajoutQuestion(result);
      }
    });
  }

  categoriesLength(){
    return this.categories.length;
  }

  ajoutCategorie(categorieName : string)
  {
    let categorie = new Categorie(categorieName, [new Question("Question 1", "unique")])
    this.selector = categorie;
    this.categories.push(categorie);
    localStorage.setItem('categories',JSON.stringify(this.categories));
    this.questions = categorie.questions;
  }

  loadCategoriesFromStorage()
  {
    var tabCategories = JSON.parse(localStorage.getItem('categories')!);
    if(tabCategories == null || tabCategories.length == 0)
    {
      this.categories = [];
    }
    else
    {
      this.categories = tabCategories;
      this.questions = this.categories[0].questions;
      this.selector = this.categories[0];
      this.selectorQ = this.categories[0].questions[0];
    }
  }

  clearStorage()
  {
    localStorage.removeItem('categories');
  }

  private ajoutQuestion(name: string) {
    let question = new Question(name, "unique");
    this.selector.questions.push(question);
    this.selectorQ = question;
    localStorage.setItem('categories',JSON.stringify(this.categories));
  }

  setCategorie(categorie: Categorie) {
    this.selector = categorie;
    this.questions = categorie.questions;
    this.selectorQ = categorie.questions[0];
  }

  setQuestion(question: Question) {
    this.selectorQ = question;
  }
}
