import {Question} from "./QUESTION";

export interface ICategorie{
  nom: string;
  questions: Question[];
}
export class Categorie implements ICategorie {
  nom: string;
  questions: Question[];
  constructor(name: string, questions: Question[]) {
    this.nom = name;
    this.questions = questions;
  }
}
