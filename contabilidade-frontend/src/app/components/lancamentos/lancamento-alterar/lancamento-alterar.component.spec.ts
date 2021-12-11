import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoAlterarComponent } from './lancamento-alterar.component';

describe('LancamentoAlterarComponent', () => {
  let component: LancamentoAlterarComponent;
  let fixture: ComponentFixture<LancamentoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
