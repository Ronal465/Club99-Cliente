import { TestBed } from '@angular/core/testing';

import { VerCursoService } from './ver-curso.service';

describe('VerCursoService', () => {
  let service: VerCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
