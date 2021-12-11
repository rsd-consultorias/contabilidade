import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecharMesComponent } from './fechar-mes.component';

describe('FecharMesComponent', () => {
  let component: FecharMesComponent;
  let fixture: ComponentFixture<FecharMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FecharMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FecharMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
