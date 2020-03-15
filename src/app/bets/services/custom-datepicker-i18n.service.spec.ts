import { TestBed } from "@angular/core/testing";

import { CustomDatepickerI18nService } from "./custom-datepicker-i18n.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe("CustomDatepickerI18nService", () => {
  beforeEach(() =>
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
      ]
    })
  );

  it("should be created", () => {
    const service: CustomDatepickerI18nService = TestBed.get(
      CustomDatepickerI18nService
    );
    expect(service).toBeTruthy();
  });
});
