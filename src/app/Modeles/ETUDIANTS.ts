export interface IEtudiant {
  classe: string;
  group: string;
  name: string;
}

export class Etudiant implements IEtudiant {
  public classe: string;
  public group: string;
  public name: string;
  constructor(classe:string, group:string, name:string) {
    this.classe =  classe;
    this.group = group;
    this.name = name;
  }
}
