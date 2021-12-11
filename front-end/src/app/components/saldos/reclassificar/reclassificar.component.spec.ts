import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclassificarComponent } from './reclassificar.component';

describe('ReclassificarComponent', () => {
  let component: ReclassificarComponent;
  let fixture: ComponentFixture<ReclassificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclassificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclassificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
