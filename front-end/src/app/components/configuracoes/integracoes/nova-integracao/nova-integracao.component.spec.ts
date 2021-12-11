import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaIntegracaoComponent } from './nova-integracao.component';

describe('NovaIntegracaoComponent', () => {
  let component: NovaIntegracaoComponent;
  let fixture: ComponentFixture<NovaIntegracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaIntegracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaIntegracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
