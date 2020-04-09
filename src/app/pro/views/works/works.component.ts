import { Component, OnInit } from "@angular/core";
import { FilesService } from "src/app/services/files/files.service";

interface Work {
  id: number;
  profile: string;
  key: string;
  company: string;
  companyUrl: string;
  customer: string;
  customerURL: string;
  dateInit: Date;
  endDate: Date;
  role: string;
}

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.scss"],
})
export class WorksComponent implements OnInit {
  public works: Work[];
  public filterProp = "profile";
  public templateId = "works";
  public loadingWorks = false;

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.invokeGetWorks();
  }

  private invokeGetWorks() {
    this.loadingWorks = true;
    this.filesService.getLocalFile("assets/files/works.json").subscribe(
      (worksResponse: Work[]) => {
        this.loadingWorks = false;
        this.works = worksResponse;
      },
      (error) => {
        this.loadingWorks = false;
        console.error("invokeGetStudies", error);
      }
    );
  }
}
