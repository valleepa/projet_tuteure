import { TestBed } from '@angular/core/testing';

import { GestionUsersService } from './gestion-users.service';

describe('GestionUsersService', () => {
  let service: GestionUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
