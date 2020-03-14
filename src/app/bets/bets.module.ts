import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
//Translation
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { BetsRoutingModule } from "./bets-routing.module";
import { DatepickerI18nComponent } from "./components/datepicker-i18n/datepicker-i18n.component";
import { ListBetsComponent } from "./views/list-bets/list-bets.component";
import { BetComponent } from "./components/bet/bet.component";
import { HomeComponent } from "./views/home/home.component";

@NgModule({
  declarations: [
    HomeComponent,
    DatepickerI18nComponent,
    ListBetsComponent,
    BetComponent
  ],
  imports: [
    CommonModule,
    BetsRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ]
})
export class BetsModule {}
