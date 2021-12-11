import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasAnaliticasComponent } from './contas-analiticas.component';

describe('ContasAnaliticasComponent', () => {
  let component: ContasAnaliticasComponent;
  let fixture: ComponentFixture<ContasAnaliticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasAnaliticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasAnaliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
