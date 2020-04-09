import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WorksComponent } from "./works.component";
import { TimeLineComponent } from "../../components/time-line/time-line.component";
import { TimeLineFilterComponent } from "../../components/time-line-filter/time-line-filter.component";
import { TimeLineListComponent } from "../../components/time-line-list/time-line-list.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe("WorksComponent", () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WorksComponent,
        TimeLineComponent,
        TimeLineFilterComponent,
        TimeLineListComponent,
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
