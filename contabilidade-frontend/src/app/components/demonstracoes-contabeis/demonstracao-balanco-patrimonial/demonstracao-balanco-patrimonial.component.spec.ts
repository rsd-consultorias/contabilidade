import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracaoBalancoPatrimonialComponent } from './demonstracao-balanco-patrimonial.component';

describe('DemonstracaoBalancoPatrimonialComponent', () => {
  let component: DemonstracaoBalancoPatrimonialComponent;
  let fixture: ComponentFixture<DemonstracaoBalancoPatrimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracaoBalancoPatrimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstracaoBalancoPatrimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
