import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonComponent } from './bouton.component';

describe('BoutonComponent', () => {
  let component: BoutonComponent;
  let fixture: ComponentFixture<BoutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
