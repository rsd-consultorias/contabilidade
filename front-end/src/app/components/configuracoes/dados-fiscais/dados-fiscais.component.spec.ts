import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFiscaisComponent } from './dados-fiscais.component';

describe('DadosFiscaisComponent', () => {
  let component: DadosFiscaisComponent;
  let fixture: ComponentFixture<DadosFiscaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosFiscaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosFiscaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
