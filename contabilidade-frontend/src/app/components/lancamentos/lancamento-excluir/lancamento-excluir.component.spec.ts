import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoExcluirComponent } from './lancamento-excluir.component';

describe('LancamentoExcluirComponent', () => {
  let component: LancamentoExcluirComponent;
  let fixture: ComponentFixture<LancamentoExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
