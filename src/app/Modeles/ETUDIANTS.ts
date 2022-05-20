export interface IEtudiant {
  id:number;
  classe: string;
  group: string;
  nom: string;
  prenom:string;
  numero:number;
}

export class Etudiant implements IEtudiant {
  public id:number;
  public classe: string;
  public group: string;
  public nom: string;
  public prenom: string;
  public numero: number;
  constructor(id:number, classe:string, group:string, nom:string, prenom:string, numero:number) {
    this.id = id;
    this.classe =  classe;
    this.group = group;
    this.nom = nom;
    this.prenom = prenom;
    this.numero = numero;
  }
}
