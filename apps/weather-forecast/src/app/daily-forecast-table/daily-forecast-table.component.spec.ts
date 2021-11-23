import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastTableComponent } from './daily-forecast-table.component';

describe('DailyForecastTableComponent', () => {
  let component: DailyForecastTableComponent;
  let fixture: ComponentFixture<DailyForecastTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyForecastTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForecastTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
