import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InputDialogComponent } from '../../Accueil/input-dialog/input-dialog.component';

@Component({
  selector: 'app-creation-questions',
  templateUrl: './creation-questions.component.html',
  styleUrls: ['./creation-questions.component.scss']
})
export class CreationQuestionsComponent implements OnInit {

  public categories : string[] = [];
  image = 'assets/img/1.svg';
  titre = 'AJOUTER UNE CATEGORIE';

  constructor(public dialog: MatDialog, public router: Router) { 
    router.events.subscribe((val) => 
    {
      this.clearStorage();
    });
  }

  ngOnInit(): void {
    this.loadCategoriesFromStorage();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, {
      width: '35%',
      height:'17%',
      panelClass: 'custom-dialog-container',
      data: {button: 'Créer', placeholder: 'Catégorie', name:''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        console.log(result);
        this.ajoutCategorie(result);
      }
      else{
        this.categories = [];
      }
    });
  }

  categoriesLength(){
    return this.categories.length;
  }

  ajoutCategorie(categorie : string)
  {
    this.categories.push(categorie);
    localStorage.setItem('categories',JSON.stringify(this.categories));
  }

  loadCategoriesFromStorage()
  {
    var tabCategories = JSON.parse(localStorage.getItem('categories')!);
    if(tabCategories == null || tabCategories.length == 0)
    {
      this.categories = [];
    }
    else
    {
      this.categories = tabCategories;
    }
  }

  clearStorage()
  {
    localStorage.removeItem('categories');
  }
}
