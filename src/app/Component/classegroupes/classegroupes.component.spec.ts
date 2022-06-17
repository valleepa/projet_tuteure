import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassegroupesComponent } from './classegroupes.component';

describe('ClassegroupesComponent', () => {
  let component: ClassegroupesComponent;
  let fixture: ComponentFixture<ClassegroupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassegroupesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassegroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
