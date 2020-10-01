import { TestBed } from '@angular/core/testing';

import { ListarCursosService } from './listar-cursos.service';

describe('ListarCursosService', () => {
  let service: ListarCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
