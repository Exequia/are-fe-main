import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsHomeComponent } from './bets-home.component';

describe('BetsHomeComponent', () => {
  let component: BetsHomeComponent;
  let fixture: ComponentFixture<BetsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
