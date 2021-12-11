import { TestBed } from '@angular/core/testing';

import { CentroCustosService } from './centro-custos.service';

describe('CentroCustosService', () => {
  let service: CentroCustosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroCustosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
