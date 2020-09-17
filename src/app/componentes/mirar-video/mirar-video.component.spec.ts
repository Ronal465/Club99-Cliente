import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirarVideoComponent } from './mirar-video.component';

describe('MirarVideoComponent', () => {
  let component: MirarVideoComponent;
  let fixture: ComponentFixture<MirarVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirarVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
