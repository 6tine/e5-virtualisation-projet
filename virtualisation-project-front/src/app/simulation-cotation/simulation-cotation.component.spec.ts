import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCotationComponent } from './simulation-cotation.component';

describe('SimulationCotationComponent', () => {
  let component: SimulationCotationComponent;
  let fixture: ComponentFixture<SimulationCotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
