import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserActionComponent } from './edit-user-action.component';

describe('EditUserActionComponent', () => {
  let component: EditUserActionComponent;
  let fixture: ComponentFixture<EditUserActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
