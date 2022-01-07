import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEtudiantsComponent } from './mes-etudiants.component';

describe('MesEtudiantsComponent', () => {
  let component: MesEtudiantsComponent;
  let fixture: ComponentFixture<MesEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
