import { TestBed } from '@angular/core/testing';

import { MatchServicesService } from './match-services.service';

describe('MatchServicesService', () => {
  let service: MatchServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
