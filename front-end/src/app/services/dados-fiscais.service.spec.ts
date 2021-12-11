import { TestBed } from '@angular/core/testing';

import { DadosFiscaisService } from './dados-fiscais.service';

describe('DadosFiscaisService', () => {
  let service: DadosFiscaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosFiscaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
