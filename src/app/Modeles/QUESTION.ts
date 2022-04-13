import {IOption, Option} from "./OPTION";
import {Reponse} from "./REPONSE";

export interface IQuestion{
  name: string;
  type: string;
  val: string;
  options: Option[] | undefined;
  reponses: Reponse[];
}
export class Question implements IQuestion{
  name: string;
  options: Option[] | undefined;
  type: string;
  val: string;
  reponses: Reponse[];
  constructor(name:string,type:string, reponse:Reponse[], val: string, options?:Option[]) {
    this.name = name;
    this.options = options;
    this.type = type;
    this.reponses = reponse;
    this.val = val;
  }
}
