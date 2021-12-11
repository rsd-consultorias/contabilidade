import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackLogonComponent } from './callback-logon.component';

describe('CallbackLogonComponent', () => {
  let component: CallbackLogonComponent;
  let fixture: ComponentFixture<CallbackLogonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackLogonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
