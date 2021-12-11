import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoContasNovoComponent } from './plano-contas-novo.component';

describe('PlanoContasNovoComponent', () => {
  let component: PlanoContasNovoComponent;
  let fixture: ComponentFixture<PlanoContasNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoContasNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoContasNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
