export interface IUser {
  id : any,
  username : string,
  email: string,
  nom : string,
  prenom : string,
  password : string,
  isAdmin : boolean,
  groupes : [] | null,
  enabled : boolean,
  authorities : null,
  accountNonExpired : boolean,
  accountNonLocked : boolean,
  credentialsNonExpired : boolean
}

export class User implements IUser {
  public id : any;
  public username : string
  public email: string
  public nom : string
  public prenom : string
  public password : string
  public isAdmin : boolean
  public groupes : [] | null
  public enabled : boolean = false
  public authorities : null
  public accountNonExpired : boolean = false
  public accountNonLocked : boolean = false
  public credentialsNonExpired : boolean = false

  public constructor(username:string,email:string,nom:string,prenom:string,password:string,isAdmin:boolean,groupes:[]|null) {
    this.username = username
    this.email = email
    this.nom = nom
    this.prenom = prenom
    this.password = password
    this.isAdmin = isAdmin
    this.groupes = groupes
  }

  getId() {
    return this.id;
  }
}
