import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionOuverteComponent } from './creation-question-ouverte.component';

describe('CreationQuestionOuverteComponent', () => {
  let component: CreationQuestionOuverteComponent;
  let fixture: ComponentFixture<CreationQuestionOuverteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionOuverteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionOuverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
