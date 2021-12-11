import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracoesContabeisComponent } from './demonstracoes-contabeis.component';

describe('DemonstracoesContabeisComponent', () => {
  let component: DemonstracoesContabeisComponent;
  let fixture: ComponentFixture<DemonstracoesContabeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracoesContabeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstracoesContabeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
