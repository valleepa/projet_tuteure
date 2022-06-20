import {IOption, Option} from "./OPTION";
import {Reponse} from "./REPONSE";

export interface IQuestion{
  intitule: string;
  typeDeQuestion: string;
  options: Option[];
  reponses: Reponse[];
  categorie: string;
}
export class Question implements IQuestion{
  intitule: string;
  options: Option[];
  typeDeQuestion: string;
  reponses: Reponse[]
  categorie: string;
  constructor(intitule:string,typeDeQuestion:string, reponse:Reponse[], categorie:string,options:Option[]) {
    this.intitule = intitule;
    this.options = options;
    this.typeDeQuestion = typeDeQuestion;
    this.reponses = reponse;
    this.categorie = categorie;
  }
}
