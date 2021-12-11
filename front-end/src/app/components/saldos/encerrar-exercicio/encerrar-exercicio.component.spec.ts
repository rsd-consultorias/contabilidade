import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerrarExercicioComponent } from './encerrar-exercicio.component';

describe('EncerrarExercicioComponent', () => {
  let component: EncerrarExercicioComponent;
  let fixture: ComponentFixture<EncerrarExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncerrarExercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncerrarExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
