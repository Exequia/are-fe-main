import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardComponent, CardTypes } from './card.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

import { Card } from 'src/app/template/components/card/models/card';
const cardNewMock: Card = {
  id: 1,
  dateInit: new Date('2020-06-01T00:00:00.000Z'),
  key: 'gamesSection'
};

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [
        RouterTestingModule,
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
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have card title i18n path'`, () => {
    component.type = CardTypes.News;
    component.card = cardNewMock;
    const property = 'title';
    expect(component.getPath(property)).toEqual('news.gamesSection.title');
    expect(component.getPath(property)).toEqual(
      `${component.type}.${component.card.key}.${property}`
    );
  });

  it(`should have card description i18n path'`, () => {
    component.type = CardTypes.News;
    component.card = cardNewMock;
    const property = 'description';
    expect(component.getPath(property)).toEqual(
      'news.gamesSection.description'
    );
    expect(component.getPath(property)).toEqual(
      `${component.type}.${component.card.key}.${property}`
    );
  });

  it('should render card-title', () => {
    component.type = CardTypes.News;
    component.card = cardNewMock;
    const property = 'title';
    component.getPath(property);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const element = compiled.querySelector('.card-title');
    expect(element).toBeTruthy();
    expect(element.textContent).toContain('news.gamesSection.title');
  });

  it('should render card-subtitle', () => {
    component.type = CardTypes.News;
    component.card = cardNewMock;
    const property = 'description';
    component.getPath(property);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const element = compiled.querySelector('.card-subtitle');
    expect(element).toBeTruthy();
    expect(element.textContent).toContain(' 01-06-2020 ');
  });

  it('should render card-text', () => {
    component.type = CardTypes.News;
    component.card = cardNewMock;
    const property = 'description';
    component.getPath(property);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const element = compiled.querySelector('.card-text');
    expect(element).toBeTruthy();
    expect(element.textContent).toContain('news.gamesSection.description');
  });
});
