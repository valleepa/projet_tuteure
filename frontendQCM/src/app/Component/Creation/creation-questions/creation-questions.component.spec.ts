import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionsComponent } from './creation-questions.component';

describe('CreationQuestionsComponent', () => {
  let component: CreationQuestionsComponent;
  let fixture: ComponentFixture<CreationQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
