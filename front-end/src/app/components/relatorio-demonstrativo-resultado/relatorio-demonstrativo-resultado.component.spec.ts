import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDemonstrativoResultadoComponent } from './relatorio-demonstrativo-resultado.component';

describe('RelatorioDemonstrativoResultadoComponent', () => {
  let component: RelatorioDemonstrativoResultadoComponent;
  let fixture: ComponentFixture<RelatorioDemonstrativoResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioDemonstrativoResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDemonstrativoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
