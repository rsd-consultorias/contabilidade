import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstracaoHomeComponent } from './demonstracao-home.component';

describe('DemonstracaoHomeComponent', () => {
  let component: DemonstracaoHomeComponent;
  let fixture: ComponentFixture<DemonstracaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstracaoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstracaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
