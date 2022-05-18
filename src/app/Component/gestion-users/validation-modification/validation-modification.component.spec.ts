import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationModificationComponent } from './validation-modification.component';

describe('ValidationModificationComponent', () => {
  let component: ValidationModificationComponent;
  let fixture: ComponentFixture<ValidationModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
