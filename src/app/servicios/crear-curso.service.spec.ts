import { TestBed } from '@angular/core/testing';

import { CrearCursoService } from './crear-curso.service';

describe('CrearCursoService', () => {
  let service: CrearCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
