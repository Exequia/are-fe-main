import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.scss"]
})
export class ConfigurationComponent implements OnInit {
  public languages = ["es_ES", "ca_ES", "en_EN"];

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  public setLanguage(language: string) {
    this.translate.use(language);
  }
}
