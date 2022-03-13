import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionComponent } from './creation-question.component';

describe('CreationQuestionComponent', () => {
  let component: CreationQuestionComponent;
  let fixture: ComponentFixture<CreationQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
