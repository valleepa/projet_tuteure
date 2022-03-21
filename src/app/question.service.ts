import { Injectable } from '@angular/core';
import {Question} from "./QUESTION";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionActuel = new BehaviorSubject(new Question('null', 'null', []));
  constructor() {
  }
}
