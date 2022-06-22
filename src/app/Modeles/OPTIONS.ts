import {Option} from "./OPTION";

export interface IOptions{
  id?: number;
  typeDeQuestion: any;
  optionsset: Option[];
}

export class Options implements IOptions {
  id: number | undefined;
  typeDeQuestion: any;
  optionsset: Option[];
  constructor(typeDeQuestion:any, optionsset:Option[], id?:number){
    this.id = id;
    this.typeDeQuestion = "UNIQUE";
    this.optionsset = optionsset;
  }
}
