import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTabTitleComponent } from './creation-tab-title.component';

describe('CreationTabTitleComponent', () => {
  let component: CreationTabTitleComponent;
  let fixture: ComponentFixture<CreationTabTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTabTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTabTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
