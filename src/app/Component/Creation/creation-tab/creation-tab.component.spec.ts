import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTabComponent } from './creation-tab.component';

describe('CreationTabComponent', () => {
  let component: CreationTabComponent;
  let fixture: ComponentFixture<CreationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
