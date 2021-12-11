import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracaoIndicadoresComponent } from './demonstracao-indicadores.component';

describe('DemonstracaoIndicadoresComponent', () => {
  let component: DemonstracaoIndicadoresComponent;
  let fixture: ComponentFixture<DemonstracaoIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracaoIndicadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstracaoIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
