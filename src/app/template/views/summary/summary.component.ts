import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  private subject = "";

  ngOnInit() {
    this.getSubject();
  }

  getAuthor(): string {
    return environment.author;
  }

  getSubject() {
    this.translate
      .get("template.summary.contact.subject")
      .subscribe((res: string) => {
        this.subject = res;
      });
  }

  getEmail(): string {
    return environment.email;
  }

  getMailTo(): string {
    return `mailto:${environment.email}?Subject=${this.subject}`;
  }
}
