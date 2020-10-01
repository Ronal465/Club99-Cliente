import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesProfesorComponent } from './funciones-profesor.component';

describe('FuncionesProfesorComponent', () => {
  let component: FuncionesProfesorComponent;
  let fixture: ComponentFixture<FuncionesProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionesProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
