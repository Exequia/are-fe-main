import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./template/views/navbar/navbar.component";

import { HomeComponent } from "./template/views/home/home.component";
import { SummaryComponent } from "./template/views/summary/summary.component";

import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
import { JwtInterceptor } from "./services/jwt.interceptor";
import { ErrorInterceptor } from "./services/error.interceptor";
import { PageNotFoundComponent } from "./template/views/page-not-found/page-not-found.component";
import { CardComponent } from "./template/components/card/card.component";
import { ListCardsComponent } from "./template/views/list-cards/list-cards.component";
import { ConfigurationComponent } from "./template/components/configuration/configuration.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    SummaryComponent,
    CardComponent,
    ListCardsComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
