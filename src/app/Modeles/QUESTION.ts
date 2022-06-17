import {IOption, Option} from "./OPTION";
import {Reponse} from "./REPONSE";

export interface IQuestion{
  intitule: string;
  type: string;
  val: string;
  options: Option[] | undefined;
  reponses: Reponse[];
  categorie: string;
}
export class Question implements IQuestion{
  intitule: string;
  options: Option[] | undefined;
  type: string;
  val: string;
  reponses: Reponse[]
  categorie: string;
  constructor(intitule:string,type:string, reponse:Reponse[], val: string, categorie:string,options?:Option[]) {
    this.intitule = intitule;
    this.options = options;
    this.type = type;
    this.reponses = reponse;
    this.val = val;
    this.categorie = categorie;
  }
}
