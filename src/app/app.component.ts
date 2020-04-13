import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "./../environments/environment";
import * as AOS from "aos";
import { UtilsService } from "./services/utils/utils.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private utils: UtilsService
  ) {
    this.translate.setDefaultLang(environment.locale);
    this.translate.use(environment.locale);
    AOS.init();
    this.utils.setDevice();
  }
}
