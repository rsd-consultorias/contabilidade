import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackLogoffComponent } from './callback-logoff.component';

describe('CallbackLogoffComponent', () => {
  let component: CallbackLogoffComponent;
  let fixture: ComponentFixture<CallbackLogoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackLogoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
