import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TimeLineFilterComponent } from "./time-line-filter.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe("TimeLineFilterComponent", () => {
  let component: TimeLineFilterComponent;
  let fixture: ComponentFixture<TimeLineFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLineFilterComponent],
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
    fixture = TestBed.createComponent(TimeLineFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.items = mockStudies;
    component.filterProp = "types";
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("function onInit", () => {
    component.ngOnInit();
    expect(component.filterButtons.length).toBe(3);
  });

  describe("Filter items", () => {
    it("View Filters options", () => {
      component.ngOnInit();
      fixture.detectChanges();
      const htmlFiltersButtons = fixture.debugElement.queryAll(
        By.css(".btn-outline-primary")
      );
      expect(htmlFiltersButtons.length).toBe(3);
    });
    it("View and model Filters options", () => {
      component.ngOnInit();
      fixture.detectChanges();
      const htmlFiltersButtons = fixture.debugElement.queryAll(
        By.css(".btn-outline-primary")
      );
      expect(htmlFiltersButtons.length).toBe(component.filterButtons.length);
    });
    it("Filter all", () => {
      component.ngOnInit();
      fixture.detectChanges();
      const htmlFiltersButtons = fixture.debugElement.queryAll(
        By.css(".btn-outline-primary")
      );
      let filteredItems: any[];
      component.filteredItems.subscribe(value => (filteredItems = value));
      htmlFiltersButtons[0].triggerEventHandler("click", null);
      expect(filteredItems).toEqual(mockStudies);
    });
    // it("Filter other", () => {
    //   component.ngOnInit();
    //   fixture.detectChanges();
    //   const htmlFiltersButtons = fixture.debugElement.queryAll(
    //     By.css(".btn-outline-primary")
    //   );
    //   let filteredItems: any[];
    //   component.filteredItems.subscribe(value => (filteredItems = value));
    //   htmlFiltersButtons[1].triggerEventHandler("click", null);
    //   fixture.detectChanges();
    //   expect(filteredItems).toEqual(mockStudiesOther);
    // });
    // it("Filter regular", () => {
    //   component.ngOnInit();
    //   fixture.detectChanges();
    //   const htmlFiltersButtons = fixture.debugElement.queryAll(
    //     By.css(".btn-outline-primary")
    //   );
    //   let outputValues: any[];
    //   component.filteredItems.subscribe(value => (outputValues = value));
    //   htmlFiltersButtons[2].triggerEventHandler("click", null);
    //   fixture.detectChanges();
    //   expect(outputValues).toEqual(mockStudiesRegular);
    // });
  });

  it("function getFilterButtons()", () => {
    component.ngOnInit();
    expect(component.filterButtons).toEqual(mockFilterButtons);
  });

  const mockStudies = [
    {
      id: 17,
      type: "other",
      key: "designPatterns",
      center: "youtube",
      dateInit: "2020-02-01T00:00:00.000Z",
      endDate: "2020-03-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-41Uiugt1WbpyFo1XT1WOquL"
    },
    {
      id: 16,
      type: "other",
      key: "webComponents",
      center: "youtube",
      dateInit: "2020-01-01T00:00:00.000Z",
      endDate: "2020-02-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLTd5ehIj0goNQNCgtu-M2oGGpyQ1m6nxo"
    },
    {
      id: 15,
      type: "other",
      key: "aws",
      center: "youtube",
      dateInit: "2019-09-01T00:00:00.000Z",
      endDate: "2019-12-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLfW3im2fiA7WoyFLDxP8TtR8UmKdpu3A2"
    },
    {
      id: 14,
      type: "other",
      key: "angular8",
      center: "Angular",
      dateInit: "2019-07-01T00:00:00.000Z",
      endDate: "2019-09-01T00:00:00.000Z",
      link: "https://angular.io/"
    },
    {
      id: 13,
      type: "other",
      key: "java11",
      center: "youtube",
      dateInit: "2019-04-01T00:00:00.000Z",
      endDate: "2019-07-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-41uwtb28Jj0Aw4gKV6FGsyH"
    },
    {
      id: 12,
      type: "other",
      key: "netcore",
      center: "DotNet",
      dateInit: "2019-02-01T00:00:00.000Z",
      endDate: "2019-04-01T00:00:00.000Z",
      link: "https://dotnet.microsoft.com/learn"
    },
    {
      id: 11,
      type: "other",
      key: "vue",
      center: "VueJs",
      dateInit: "2019-01-01T00:00:00.000Z",
      endDate: "2019-02-01T00:00:00.000Z",
      link: "https://vuejs.org/v2/guide/"
    },
    {
      id: 10,
      type: "other",
      key: "angular67",
      center: "Angular",
      dateInit: "2018-10-01T00:00:00.000Z",
      endDate: "2018-12-31T00:00:00.000Z",
      link: "https://angular.io/"
    },
    {
      id: 9,
      type: "other",
      key: "java8",
      center: "youtube",
      dateInit: "2018-07-01T00:00:00.000Z",
      endDate: "2018-08-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/watch?v=4WEOzOndA68&list=PLvimn1Ins-419yVe5iPfiXrg4mZJl5kLS"
    },
    {
      id: 8,
      type: "other",
      key: "springboot",
      center: "youtube",
      dateInit: "2018-02-01T00:00:00.000Z",
      endDate: "2018-07-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-40wR4PC-YtTQ5TKt3vRrVwl"
    },
    {
      id: 7,
      type: "other",
      key: "spring",
      center: "youtube",
      dateInit: "2017-10-01T00:00:00.000Z",
      endDate: "2017-12-31T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-40CImsffjCkv_TrKzYiB1gb"
    },
    {
      id: 6,
      type: "other",
      key: "angular2",
      center: "Udemy",
      dateInit: "2017-09-01T00:00:00.000Z",
      endDate: "2017-10-01T00:00:00.000Z"
    },
    {
      id: 5,
      type: "other",
      key: "angularjs",
      center: "Udemy",
      dateInit: "2016-09-01T00:00:00.000Z",
      endDate: "2016-10-01T00:00:00.000Z"
    },
    {
      id: 4,
      type: "other",
      key: "frameworkNet",
      center: "Élogos",
      dateInit: "2014-03-01T00:00:00.000Z",
      endDate: "2014-07-01T00:00:00.000Z"
    },
    {
      id: 3,
      type: "other",
      key: "jee",
      center: "Vapor Llonch, Ajuntament de Sabadell",
      dateInit: "2013-02-01T00:00:00.000Z",
      endDate: "2013-07-01T00:00:00.000Z"
    },
    {
      id: 2,
      type: "regular",
      key: "dam",
      center: "I.E.S Sabadell",
      dateInit: "2013-09-01T00:00:00.000Z",
      endDate: "2015-07-01T00:00:00.000Z",
      link:
        "https://agora.xtec.cat/ies-sabadell/cicles-formatius/estudis-que-impartim/dam-desenvolupament-daplicacions-informatiques/",
      qualify: "9,22"
    },
    {
      id: 1,
      type: "regular",
      key: "admin",
      center: "I.E.S Badia",
      dateInit: "2003-09-01T00:00:00.000Z",
      endDate: "2005-07-01T00:00:00.000Z",
      link:
        "https://agora.xtec.cat/iesbadia/formacio-professional/administracio-i-gestio/grau-superior-administracio-i-finances/",
      qualify: "8,27"
    }
  ];

  const mockStudiesRegular = [
    {
      id: 2,
      type: "regular",
      key: "dam",
      center: "I.E.S Sabadell",
      dateInit: "2013-09-01T00:00:00.000Z",
      endDate: "2015-07-01T00:00:00.000Z",
      link:
        "https://agora.xtec.cat/ies-sabadell/cicles-formatius/estudis-que-impartim/dam-desenvolupament-daplicacions-informatiques/",
      qualify: "9,22"
    },
    {
      id: 1,
      type: "regular",
      key: "admin",
      center: "I.E.S Badia",
      dateInit: "2003-09-01T00:00:00.000Z",
      endDate: "2005-07-01T00:00:00.000Z",
      link:
        "https://agora.xtec.cat/iesbadia/formacio-professional/administracio-i-gestio/grau-superior-administracio-i-finances/",
      qualify: "8,27"
    }
  ];

  const mockStudiesOther = [
    {
      id: 17,
      type: "other",
      key: "designPatterns",
      center: "youtube",
      dateInit: "2020-02-01T00:00:00.000Z",
      endDate: "2020-03-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-41Uiugt1WbpyFo1XT1WOquL"
    },
    {
      id: 16,
      type: "other",
      key: "webComponents",
      center: "youtube",
      dateInit: "2020-01-01T00:00:00.000Z",
      endDate: "2020-02-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLTd5ehIj0goNQNCgtu-M2oGGpyQ1m6nxo"
    },
    {
      id: 15,
      type: "other",
      key: "aws",
      center: "youtube",
      dateInit: "2019-09-01T00:00:00.000Z",
      endDate: "2019-12-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLfW3im2fiA7WoyFLDxP8TtR8UmKdpu3A2"
    },
    {
      id: 14,
      type: "other",
      key: "angular8",
      center: "Angular",
      dateInit: "2019-07-01T00:00:00.000Z",
      endDate: "2019-09-01T00:00:00.000Z",
      link: "https://angular.io/"
    },
    {
      id: 13,
      type: "other",
      key: "java11",
      center: "youtube",
      dateInit: "2019-04-01T00:00:00.000Z",
      endDate: "2019-07-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-41uwtb28Jj0Aw4gKV6FGsyH"
    },
    {
      id: 12,
      type: "other",
      key: "netcore",
      center: "DotNet",
      dateInit: "2019-02-01T00:00:00.000Z",
      endDate: "2019-04-01T00:00:00.000Z",
      link: "https://dotnet.microsoft.com/learn"
    },
    {
      id: 11,
      type: "other",
      key: "vue",
      center: "VueJs",
      dateInit: "2019-01-01T00:00:00.000Z",
      endDate: "2019-02-01T00:00:00.000Z",
      link: "https://vuejs.org/v2/guide/"
    },
    {
      id: 10,
      type: "other",
      key: "angular67",
      center: "Angular",
      dateInit: "2018-10-01T00:00:00.000Z",
      endDate: "2018-12-31T00:00:00.000Z",
      link: "https://angular.io/"
    },
    {
      id: 9,
      type: "other",
      key: "java8",
      center: "youtube",
      dateInit: "2018-07-01T00:00:00.000Z",
      endDate: "2018-08-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/watch?v=4WEOzOndA68&list=PLvimn1Ins-419yVe5iPfiXrg4mZJl5kLS"
    },
    {
      id: 8,
      type: "other",
      key: "springboot",
      center: "youtube",
      dateInit: "2018-02-01T00:00:00.000Z",
      endDate: "2018-07-01T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-40wR4PC-YtTQ5TKt3vRrVwl"
    },
    {
      id: 7,
      type: "other",
      key: "spring",
      center: "youtube",
      dateInit: "2017-10-01T00:00:00.000Z",
      endDate: "2017-12-31T00:00:00.000Z",
      link:
        "https://www.youtube.com/playlist?list=PLvimn1Ins-40CImsffjCkv_TrKzYiB1gb"
    },
    {
      id: 6,
      type: "other",
      key: "angular2",
      center: "Udemy",
      dateInit: "2017-09-01T00:00:00.000Z",
      endDate: "2017-10-01T00:00:00.000Z"
    },
    {
      id: 5,
      type: "other",
      key: "angularjs",
      center: "Udemy",
      dateInit: "2016-09-01T00:00:00.000Z",
      endDate: "2016-10-01T00:00:00.000Z"
    },
    {
      id: 4,
      type: "other",
      key: "frameworkNet",
      center: "Élogos",
      dateInit: "2014-03-01T00:00:00.000Z",
      endDate: "2014-07-01T00:00:00.000Z"
    },
    {
      id: 3,
      type: "other",
      key: "jee",
      center: "Vapor Llonch, Ajuntament de Sabadell",
      dateInit: "2013-02-01T00:00:00.000Z",
      endDate: "2013-07-01T00:00:00.000Z"
    }
  ];

  const mockFilterButtons = [
    {
      value: "",
      items: 17
    },
    {
      value: "other",
      items: 15
    },
    {
      value: "regular",
      items: 2
    }
  ];
});
