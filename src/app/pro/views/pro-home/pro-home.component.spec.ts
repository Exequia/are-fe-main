import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProHomeComponent } from "./pro-home.component";
import { ArchitectureComponent } from "../../components/architecture/architecture.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe("ProHomeComponent", () => {
  let component: ProHomeComponent;
  let fixture: ComponentFixture<ProHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProHomeComponent, ArchitectureComponent],
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
    fixture = TestBed.createComponent(ProHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
