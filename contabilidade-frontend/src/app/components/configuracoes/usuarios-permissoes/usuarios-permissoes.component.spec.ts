import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosPermissoesComponent } from './usuarios-permissoes.component';

describe('UsuariosPermissoesComponent', () => {
  let component: UsuariosPermissoesComponent;
  let fixture: ComponentFixture<UsuariosPermissoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosPermissoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosPermissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
