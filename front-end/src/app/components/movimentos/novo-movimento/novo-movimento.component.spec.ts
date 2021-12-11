import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoMovimentoComponent } from './novo-movimento.component';

describe('NovoMovimentoComponent', () => {
  let component: NovoMovimentoComponent;
  let fixture: ComponentFixture<NovoMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoMovimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
