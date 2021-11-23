import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastTableComponent } from './hourly-forecast-table.component';

describe('HourlyForecastTableComponent', () => {
  let component: HourlyForecastTableComponent;
  let fixture: ComponentFixture<HourlyForecastTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyForecastTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyForecastTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
