import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUnicoComponent } from './reporte-unico.component';

describe('ReporteUnicoComponent', () => {
  let component: ReporteUnicoComponent;
  let fixture: ComponentFixture<ReporteUnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteUnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
