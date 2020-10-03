import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesAdministradorComponent } from './funciones-administrador.component';

describe('FuncionesAdministradorComponent', () => {
  let component: FuncionesAdministradorComponent;
  let fixture: ComponentFixture<FuncionesAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionesAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
