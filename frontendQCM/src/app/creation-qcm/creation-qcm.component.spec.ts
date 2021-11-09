import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQCMComponent } from './creation-qcm.component';

describe('CreationQCMComponent', () => {
  let component: CreationQCMComponent;
  let fixture: ComponentFixture<CreationQCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationQCMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
