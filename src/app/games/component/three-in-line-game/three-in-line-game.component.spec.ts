import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeInLineGameComponent } from './three-in-line-game.component';
import { ThreePlayerComponent } from '../three-player/three-player.component';
import { ThreeDashboardComponent } from '../three-dashboard/three-dashboard.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe('ThreeInLineGameComponent', () => {
  let component: ThreeInLineGameComponent;
  let fixture: ComponentFixture<ThreeInLineGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeInLineGameComponent, ThreePlayerComponent, ThreeDashboardComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeInLineGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
