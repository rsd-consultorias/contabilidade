import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaContaAnaliticaComponent } from './nova-conta-analitica.component';

describe('NovaContaAnaliticaComponent', () => {
  let component: NovaContaAnaliticaComponent;
  let fixture: ComponentFixture<NovaContaAnaliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaContaAnaliticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaContaAnaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
