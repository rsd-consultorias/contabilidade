import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoHomeComponent } from './lancamento-home.component';

describe('LancamentoHomeComponent', () => {
  let component: LancamentoHomeComponent;
  let fixture: ComponentFixture<LancamentoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
