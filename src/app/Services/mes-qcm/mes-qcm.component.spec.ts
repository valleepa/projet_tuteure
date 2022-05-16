import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesQCMComponent } from './mes-qcm.component';

describe('MesQCMComponent', () => {
  let component: MesQCMComponent;
  let fixture: ComponentFixture<MesQCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesQCMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesQCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
