import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingAnalyticsComponent } from './reporting-analytics.component';

describe('ReportingAnalyticsComponent', () => {
  let component: ReportingAnalyticsComponent;
  let fixture: ComponentFixture<ReportingAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportingAnalyticsComponent]
    });
    fixture = TestBed.createComponent(ReportingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
