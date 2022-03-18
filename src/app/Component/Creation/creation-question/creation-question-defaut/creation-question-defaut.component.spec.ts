import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionDefautComponent } from './creation-question-defaut.component';

describe('CreationQuestionDefautComponent', () => {
  let component: CreationQuestionDefautComponent;
  let fixture: ComponentFixture<CreationQuestionDefautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionDefautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionDefautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
