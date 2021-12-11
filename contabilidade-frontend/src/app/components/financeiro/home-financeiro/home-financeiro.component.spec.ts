import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFinanceiroComponent } from './home-financeiro.component';

describe('HomeFinanceiroComponent', () => {
  let component: HomeFinanceiroComponent;
  let fixture: ComponentFixture<HomeFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
