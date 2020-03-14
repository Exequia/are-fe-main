import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsSummaryComponent } from './bets-summary.component';

describe('BetsSummaryComponent', () => {
  let component: BetsSummaryComponent;
  let fixture: ComponentFixture<BetsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
