import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTitleComponent } from './creation-title.component';

describe('CreationTitleComponent', () => {
  let component: CreationTitleComponent;
  let fixture: ComponentFixture<CreationTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
