import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesHomeComponent } from './configuracoes-home.component';

describe('ConfiguracoesHomeComponent', () => {
  let component: ConfiguracoesHomeComponent;
  let fixture: ComponentFixture<ConfiguracoesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracoesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracoesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
