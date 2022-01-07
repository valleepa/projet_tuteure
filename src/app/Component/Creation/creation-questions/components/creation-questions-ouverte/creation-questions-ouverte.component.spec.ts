import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionsOuverteComponent } from './creation-questions-ouverte.component';

describe('CreationQuestionsOuverteComponent', () => {
  let component: CreationQuestionsOuverteComponent;
  let fixture: ComponentFixture<CreationQuestionsOuverteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionsOuverteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionsOuverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
