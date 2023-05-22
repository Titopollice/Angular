import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPrincipaisComponent } from './dados-principais.component';

describe('DadosPrincipaisComponent', () => {
  let component: DadosPrincipaisComponent;
  let fixture: ComponentFixture<DadosPrincipaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosPrincipaisComponent]
    });
    fixture = TestBed.createComponent(DadosPrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
