import {IOption} from "./OPTION";

export interface IQuestion{
  name: string;
  type: string;
  option: IOption[] | undefined;
}
export class Question implements IQuestion{
  name: string;
  option: IOption[] | undefined;
  type: string;
  constructor(name:string,type:string) {
    this.name = name;
    this.option = undefined
    this.type = type;
  }
}
