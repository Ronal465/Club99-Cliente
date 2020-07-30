import { TestBed } from '@angular/core/testing';

import { ListasFormulariosService } from './listas-formularios.service';

describe('ListasFormulariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListasFormulariosService = TestBed.get(ListasFormulariosService);
    expect(service).toBeTruthy();
  });
});
