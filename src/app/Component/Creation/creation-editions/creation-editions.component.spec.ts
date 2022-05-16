import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEditionsComponent } from './creation-editions.component';

describe('CreationEditionsComponent', () => {
  let component: CreationEditionsComponent;
  let fixture: ComponentFixture<CreationEditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationEditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
