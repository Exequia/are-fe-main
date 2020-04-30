import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeInLineComponent } from './three-in-line.component';
import { ThreeInLineGameComponent } from '../../component/three-in-line-game/three-in-line-game.component';
import { ThreePlayerComponent } from '../../component/three-player/three-player.component';
import { ThreeDashboardComponent } from '../../component/three-dashboard/three-dashboard.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe('ThreeInLineComponent', () => {
  let component: ThreeInLineComponent;
  let fixture: ComponentFixture<ThreeInLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeInLineComponent, ThreeInLineGameComponent, ThreePlayerComponent, ThreeDashboardComponent],
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
    fixture = TestBed.createComponent(ThreeInLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
