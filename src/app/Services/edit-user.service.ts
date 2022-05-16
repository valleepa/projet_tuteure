import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {User} from "../Modeles/USER";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor( private http: HttpClient) {}

  getIdFromId(id:any) {
    return this.http.get<User>(`http://localhost:8080/user/${id}`).pipe(map((res)=>{
      return res != null ? res.id:null;
    }))
  }

  getIdFromUsername(username :String) {
    return this.http.get<User>(`http://localhost:8080/user/${username}`).pipe(map((res)=>{
      return res != null ? res.id:null;
    }))
  }

  getUserFromId(id: number){
    return this.http.get<User>(`http://localhost:8080/user/${id}`).pipe(map((res)=>{
      return res != null ? res:null;
    }))
  }

}
