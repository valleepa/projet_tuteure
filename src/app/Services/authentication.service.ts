import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USERNAME = 'authenticatedUser'
  ID = "-1"
  PRENOM = 'authenticatedPrenom'
  NOM = 'authenticatedNom'
  EMAIL = 'authenticatedEmail'
  ISADMIN = "false"

  public username: any;
  public password: string | undefined;
  public id: any;
  public prenom : any;
  public nom : any;
  private email: any;
  private isAdmin: any;

  constructor(private http: HttpClient) {

  }


  authenticationService(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    const options =  {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }

    return this.http.post<any>(`http://localhost:8080/login`,
      body.toString(), options).pipe(map((res) => {
        console.log("res")
        console.log(res)
        this.id = res.id
        this.username = res.username
        this.prenom = res.prenom
        this.nom = res.nom
        this.email = res.email
        this.isAdmin = res.isAdmin
        this.registerSuccessfulLogin(this.id,this.username,this.prenom,this.nom,this.email,this.isAdmin);
    }));
  }

  registerSuccessfulLogin(id:string,username: string, prenom: string, nom: string, email: string, isAdmin: boolean) {
    sessionStorage.setItem(this.USERNAME, username)
    sessionStorage.setItem(this.PRENOM, prenom)
    sessionStorage.setItem(this.NOM, nom)
    sessionStorage.setItem(this.EMAIL, email)
    sessionStorage.setItem(this.ISADMIN, String(isAdmin))
    sessionStorage.setItem(this.ID, this.id)

  }

  logout() {
    sessionStorage.removeItem(this.ID);
    sessionStorage.removeItem(this.USERNAME);
    sessionStorage.removeItem(this.PRENOM);
    sessionStorage.removeItem(this.NOM);
    sessionStorage.removeItem(this.EMAIL);
    sessionStorage.removeItem(this.ISADMIN);

    this.username = undefined;
    this.password = undefined;
    this.id = undefined;
    this.prenom = undefined;
    this.nom = undefined;
    this.email = undefined;
    this.isAdmin = undefined;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.ID)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.ID)
    if (user === null) return ''
    return user
  }

  getName(){
    let prenom = sessionStorage.getItem(this.PRENOM)
    let nom = sessionStorage.getItem(this.NOM)

    if(prenom == null || nom == null) return ""

    return nom.toUpperCase() + " " + prenom
  }

  getId(){
    return sessionStorage.getItem(this.ID)
  }

  getAdmin() {
    return sessionStorage.getItem(this.ISADMIN)
  }
}
