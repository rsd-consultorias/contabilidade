import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosCustosComponent } from './centros-custos.component';

describe('CentrosCustosComponent', () => {
  let component: CentrosCustosComponent;
  let fixture: ComponentFixture<CentrosCustosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosCustosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosCustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
