import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoContasHomeComponent } from './plano-contas-home.component';

describe('PlanoContasHomeComponent', () => {
  let component: PlanoContasHomeComponent;
  let fixture: ComponentFixture<PlanoContasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoContasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoContasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
