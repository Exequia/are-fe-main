import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineListComponent } from './time-line-list.component';
import { TimeLineComponent } from '../time-line/time-line.component';
import { TimeLineFilterComponent } from '../time-line-filter/time-line-filter.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe('TimeLineListComponent', () => {
  let component: TimeLineListComponent;
  let fixture: ComponentFixture<TimeLineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [TimeLineListComponent, TimeLineComponent, TimeLineFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
