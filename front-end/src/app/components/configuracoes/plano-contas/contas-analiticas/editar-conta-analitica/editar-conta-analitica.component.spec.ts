import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContaAnaliticaComponent } from './editar-conta-analitica.component';

describe('EditarContaAnaliticaComponent', () => {
  let component: EditarContaAnaliticaComponent;
  let fixture: ComponentFixture<EditarContaAnaliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContaAnaliticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarContaAnaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
