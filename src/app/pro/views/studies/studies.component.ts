import { Component, OnInit } from "@angular/core";
import { FilesService } from "src/app/services/files/files.service";
// import { TimeLineItem } from "../../components/time-line/models/TimeLine";
interface TimeLineItem {
  id: number;
  key: string;
  center: string;
  dateInit: string;
  endDate: string;
  qualify?: string;
  comments?: string;
  link?: string;
}

@Component({
  selector: "app-studies",
  templateUrl: "./studies.component.html",
  styleUrls: ["./studies.component.scss"]
})
export class StudiesComponent implements OnInit {
  public studies: TimeLineItem[];

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    // this.studies = this.getStudies();
    this.invokeGetStudies();
  }

  private invokeGetStudies() {
    this.filesService.getLocalFile("assets/files/studies.json").subscribe(
      (studiesResponse: TimeLineItem[]) => (this.studies = studiesResponse),
      error => console.error("invokeGetStudies", error)
    );
  }

  // private getStudies(): TimeLineItem[] {
  //   let studies: TimeLineItem[] = [];
  //   studies.push(
  //     {
  //       id: 0,
  //       name: "web components",
  //       center: "youtube",
  //       dateInit: new Date().toISOString(),
  //       endDate: new Date().toISOString()
  //     },
  //     {
  //       id: 1,
  //       name: "web components",
  //       center: "youtube",
  //       dateInit: new Date().toISOString(),
  //       endDate: new Date().toISOString()
  //     }
  //   );
  //   return studies;
  // }
}
