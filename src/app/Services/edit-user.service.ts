import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {User} from "../Modeles/USER";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor( private http: HttpClient ) {}


  editUser(user: User) {
    return this.http.put("http://localhost:8080/user",JSON.stringify(user)).pipe(map(res => {
      return res != null ? res:null;
    }))
  }
}
