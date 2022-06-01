import { TestBed } from '@angular/core/testing';

import { EtudiantsService } from './etudiants.service';

describe('EtudiantsService', () => {
  let service: EtudiantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
