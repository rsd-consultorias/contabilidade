import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaPagarReceberNovoComponent } from './conta-pagar-receber-novo.component';

describe('ContaPagarReceberNovoComponent', () => {
  let component: ContaPagarReceberNovoComponent;
  let fixture: ComponentFixture<ContaPagarReceberNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaPagarReceberNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaPagarReceberNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
