import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Question } from 'src/app/Entities/Question';
import { QuestionMultiple } from 'src/app/Entities/QuestionMultiple';
import { TypeDeQuestion } from 'src/app/Entities/TypeDeQuestion';
import { InputDialogComponent } from '../../Accueil/input-dialog/input-dialog.component';

@Component({
  selector: 'app-creation-questions',
  templateUrl: './creation-questions.component.html',
  styleUrls: ['./creation-questions.component.scss']
})
export class CreationQuestionsComponent implements OnInit {

  public categories : string[] = [];
  image = 'assets/img/1.svg';
  titre = 'AJOUTER UNE CATEGORIE';
  questionForm!: FormGroup;
  typesQuestion = [
    {value: "DEFAUT", viewValue: "DEFAUT"},
    {value: "NUMERIQUE", viewValue: "NUMERIQUE"},
    {value: "OUVERTE", viewValue: "OUVERTE"}
  ];
  public typeQuestionSelected = "";
  public questions : Question[] = [];
  public idQuestionSelected = 0;
  public showForm = false;

  constructor(public dialog: MatDialog, public router: Router, private fb: FormBuilder)
 { 
    router.events.subscribe((val) => 
    {
      this.clearStorage();
    });
    this.createForm();
    this.addQuestion();
  }

  ngOnInit(): void {
    this.loadCategoriesFromStorage();
  }

  openDialog(): void {
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
    });
  }

  categoriesLength(){
    return this.categories.length;
  }

  ajoutCategorie(categorie : string)
  {
    this.categories.push(categorie);
    localStorage.setItem('categories',JSON.stringify(this.categories));
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
    }
  }

  clearStorage()
  {
    localStorage.removeItem('categories');
  }

  createForm()
  {
    this.questionForm = this.fb.group({
      nom : ['', Validators.required],
      contenu : ['', Validators.required],
      type: ['', Validators.required],
      notation: ['', Validators.required],
      // reponse: ['', Validators.required],
    });
  }

  saveQuestion(form : FormGroup)
  {
    // console.log(form.value.contenu);
    // penser à faire un switch
    const index = this.questions.findIndex(q => q.id == this.idQuestionSelected);
    this.questions[index].typeDeQuestion = form.value.type;
    this.questions[index].intitule = form.value.nom;
    this.questions[index].sujet = form.value.contenu;
    this.questions[index].points = form.value.notation;
  }

  addQuestion()
  {
    const question = new QuestionMultiple();
    question.id = this.generateQuestionId();
    question.intitule = "Question " + question.id.toString();
    question.sujet = "";
    question.points = 1;
    this.questions.push(question);
    //this.remplaceFormWithCurrentQuestion(question.id);
  }

  remplaceFormWithCurrentQuestion(id : number | undefined)
  {
    this.idQuestionSelected = id || 0;
    
    const question = this.questions.find(x => x.id == id) as QuestionMultiple;
    this.typeQuestionSelected = question.typeDeQuestion || "";

    this.questionForm = this.fb.group({
      nom : [question.intitule, Validators.required],
      contenu : [question.sujet, Validators.required],
      type: [question.typeDeQuestion, [Validators.required]],
      notation: [question.points, Validators.required],
      // reponse: ['', Validators.required],
    });
    this.showForm = true;
    this.questionForm.get('type')?.setValue('DEFAUT');
    this.typeQuestionSelected = "DEFAUT";
  }

  debug()
  {
    debugger;
  }

  deleteQuestion()
  {
    this.questions = this.questions.filter(q => q.id !== this.idQuestionSelected);
    this.showForm = false;
  }

  generateQuestionId()
  {

    const ids = this.questions.map(
      q => (q.id!)
    );
    console.log(ids);
    if(ids.length == 0)
    {
      return 1;
    }
    else
    {
      let max = 1;
      for(let id of ids)
      {
        if(id > max)
        {
          max = id;
        }
      }
      return max+1;
    }
  }

  onChangementTypeQuestion(question : string)
  {
    this.typeQuestionSelected = question;

    console.log(question);
  }
}
