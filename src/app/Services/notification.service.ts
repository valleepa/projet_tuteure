import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarModule} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }
  errorMessage(message:string){
    this.snackBar.open(message, "",{
      duration:2000,
      panelClass: ['errorMessage']
    })
  }
  successMessage(message:string){
    this.snackBar.open(message, "",{
      duration:3000,
      panelClass: ['successMessage']
    })
  }
}
