import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMovimentosComponent } from './listar-movimentos.component';

describe('ListarMovimentosComponent', () => {
  let component: ListarMovimentosComponent;
  let fixture: ComponentFixture<ListarMovimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMovimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMovimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
