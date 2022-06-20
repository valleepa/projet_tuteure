import {Question} from "./QUESTION";

export interface ICategorie{
  nom: string;
  questions: Question[];
}
export class Categorie implements ICategorie {
  nom: string;
  questions: Question[];
  constructor(nom: string, questions: Question[]) {
    this.nom = nom;
    this.questions = questions;
  }
}
