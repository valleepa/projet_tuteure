import {Question} from "./QUESTION";

export interface ICategorie{
  name: string;
  questions: Question[];
}
export class Categorie implements ICategorie {
  name: string;
  questions: Question[];
  constructor(name: string, questions: Question[]) {
    this.name = name;
    this.questions = questions;
  }
}
