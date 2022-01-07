import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauEtudiantsComponent } from './tableau-etudiants.component';

describe('TableauEtudiantsComponent', () => {
  let component: TableauEtudiantsComponent;
  let fixture: ComponentFixture<TableauEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
