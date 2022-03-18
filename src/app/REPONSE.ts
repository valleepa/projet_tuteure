import {IOption} from "./OPTION";

export interface IReponse{
  contain: string;
  id: number;
}
export class Reponse implements IReponse{
  contain: string;
  id: number;
  constructor(contain:string, id:number) {
    this.contain = contain;
    this.id = id;
  }
}
