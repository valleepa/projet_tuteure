import {IOption} from "./OPTION";

export interface IReponse{
  contain: string;
  id?: number;
  isGood: boolean;
}
export class Reponse implements IReponse{
  contain: string;
  id: number | undefined;
  isGood : boolean;
  constructor(contain:string, isGood:boolean, id?:number) {
    this.contain = contain;
    this.id = id;
    this.isGood = isGood;
  }

}
