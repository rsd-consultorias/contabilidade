import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracaoResultadoComponent } from './demonstracao-resultado.component';

describe('DemonstracaoResultadoComponent', () => {
  let component: DemonstracaoResultadoComponent;
  let fixture: ComponentFixture<DemonstracaoResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracaoResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstracaoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
