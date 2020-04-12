import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePlayerComponent } from './three-player.component';

describe('ThreePlayerComponent', () => {
  let component: ThreePlayerComponent;
  let fixture: ComponentFixture<ThreePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
