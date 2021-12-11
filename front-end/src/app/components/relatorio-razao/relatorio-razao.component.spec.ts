import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioRazaoComponent } from './relatorio-razao.component';

describe('RelatorioRazaoComponent', () => {
  let component: RelatorioRazaoComponent;
  let fixture: ComponentFixture<RelatorioRazaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioRazaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioRazaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
