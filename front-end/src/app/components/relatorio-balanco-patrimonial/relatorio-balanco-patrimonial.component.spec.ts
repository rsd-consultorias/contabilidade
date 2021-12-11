import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioBalancoPatrimonialComponent } from './relatorio-balanco-patrimonial.component';

describe('RelatorioBalancoPatrimonialComponent', () => {
  let component: RelatorioBalancoPatrimonialComponent;
  let fixture: ComponentFixture<RelatorioBalancoPatrimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioBalancoPatrimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioBalancoPatrimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
