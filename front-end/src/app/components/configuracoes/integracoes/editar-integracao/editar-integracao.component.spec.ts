import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIntegracaoComponent } from './editar-integracao.component';

describe('EditarIntegracaoComponent', () => {
  let component: EditarIntegracaoComponent;
  let fixture: ComponentFixture<EditarIntegracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarIntegracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarIntegracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
