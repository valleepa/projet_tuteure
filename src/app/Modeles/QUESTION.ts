import {IOption, Option} from "./OPTION";
import {Reponse} from "./REPONSE";
import {Options} from "./OPTIONS";

export interface IQuestion{
  intitule: string;
  typeDeQuestion: string;
  options: Options;
  reponses: Reponse[];
  categorie: string;
}
export class Question implements IQuestion{
  intitule: string;
  options: Options;
  typeDeQuestion: string;
  reponses: Reponse[]
  categorie: string;
  constructor(intitule:string,typeDeQuestion:string, reponse:Reponse[], categorie:string,options:Options) {
    this.intitule = intitule;
    this.options = options;
    this.typeDeQuestion = typeDeQuestion;
    this.reponses = reponse;
    this.categorie = categorie;
  }
}
