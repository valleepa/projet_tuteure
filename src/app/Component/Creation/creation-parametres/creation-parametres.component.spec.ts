import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationParametresComponent } from './creation-parametres.component';

describe('CreationParametresComponent', () => {
  let component: CreationParametresComponent;
  let fixture: ComponentFixture<CreationParametresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationParametresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
