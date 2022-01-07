import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuestionsNumeriqueComponent } from './creation-questions-numerique.component';

describe('CreationQuestionsNumeriqueComponent', () => {
  let component: CreationQuestionsNumeriqueComponent;
  let fixture: ComponentFixture<CreationQuestionsNumeriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQuestionsNumeriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuestionsNumeriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
