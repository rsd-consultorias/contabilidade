import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMovimentoComponent } from './editar-movimento.component';

describe('EditarMovimentoComponent', () => {
  let component: EditarMovimentoComponent;
  let fixture: ComponentFixture<EditarMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMovimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
