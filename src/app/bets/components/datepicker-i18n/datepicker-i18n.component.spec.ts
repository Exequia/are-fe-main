import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { DatepickerI18nComponent } from "./datepicker-i18n.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe("DatepickerI18nComponent", () => {
  let component: DatepickerI18nComponent;
  let fixture: ComponentFixture<DatepickerI18nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerI18nComponent],
      imports: [
        FormsModule,
        NgbModule,
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
    fixture = TestBed.createComponent(DatepickerI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
