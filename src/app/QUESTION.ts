import {IOption} from "./OPTION";
import {Reponse} from "./REPONSE";

export interface IQuestion{
  name: string;
  type: string;
  option: IOption[] | undefined;
  reponses: Reponse[];
}
export class Question implements IQuestion{
  name: string;
  option: IOption[] | undefined;
  type: string;
  reponses: Reponse[];
  constructor(name:string,type:string, reponse:Reponse[]) {
    this.name = name;
    this.option = undefined
    this.type = type;
    this.reponses = reponse;
  }
}
