import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracaoRazaoComponent } from './demonstracao-razao.component';

describe('DemonstracaoRazaoComponent', () => {
  let component: DemonstracaoRazaoComponent;
  let fixture: ComponentFixture<DemonstracaoRazaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracaoRazaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstracaoRazaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
