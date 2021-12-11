import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoContasNovoHomeComponent } from './plano-contas-novo-home.component';

describe('PlanoContasNovoHomeComponent', () => {
  let component: PlanoContasNovoHomeComponent;
  let fixture: ComponentFixture<PlanoContasNovoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoContasNovoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoContasNovoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
