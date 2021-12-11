import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracaoMutacaoPatrimonioLiquidoComponent } from './demonstracao-mutacao-patrimonio-liquido.component';

describe('DemonstracaoMutacaoPatrimonioLiquidoComponent', () => {
  let component: DemonstracaoMutacaoPatrimonioLiquidoComponent;
  let fixture: ComponentFixture<DemonstracaoMutacaoPatrimonioLiquidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracaoMutacaoPatrimonioLiquidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstracaoMutacaoPatrimonioLiquidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
