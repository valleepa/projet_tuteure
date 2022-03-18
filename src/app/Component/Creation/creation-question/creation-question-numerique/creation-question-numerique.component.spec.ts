import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionNumeriqueComponent } from './creation-question-numerique.component';

describe('CreationQuestionNumeriqueComponent', () => {
  let component: CreationQuestionNumeriqueComponent;
  let fixture: ComponentFixture<CreationQuestionNumeriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionNumeriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionNumeriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
