import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionsDefautComponent } from './creation-questions-defaut.component';

describe('CreationQuestionsDefautComponent', () => {
  let component: CreationQuestionsDefautComponent;
  let fixture: ComponentFixture<CreationQuestionsDefautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionsDefautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionsDefautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
