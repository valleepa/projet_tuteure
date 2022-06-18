export interface IEtudiant {
  id:number;
  classe: string;
  groupe: string;
  nom: string;
  prenom:string;
  noetudiant:number;
}

export class Etudiant implements IEtudiant {
  public id:number;
  public classe: string;
  public groupe: string;
  public nom: string;
  public prenom: string;
  public noetudiant: number;
  constructor(id:number, classe:string, groupe:string, nom:string, prenom:string, noetudiant:number) {
    this.id = id;
    this.classe =  classe;
    this.groupe = groupe;
    this.nom = nom;
    this.prenom = prenom;
    this.noetudiant = noetudiant;
  }
}
