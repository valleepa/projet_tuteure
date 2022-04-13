import { Injectable } from '@angular/core';
import {Question} from "./QUESTION";
import {BehaviorSubject} from "rxjs";
import {Categorie} from "./CATEGORIE";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionActuel = new BehaviorSubject(new Question('null', 'null', []));
  categorieActuel = new BehaviorSubject(new Categorie('null', [new Question('null', 'null', [])]));
  constructor() {
  }
}
