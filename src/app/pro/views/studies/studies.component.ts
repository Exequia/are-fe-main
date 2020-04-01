import { Component, OnInit } from "@angular/core";
import { FilesService } from "src/app/services/files/files.service";
// import { TimeLineItem } from "../../components/time-line/models/TimeLine";
interface TimeLineItem {
  id: number;
  type: StudiesType;
  key: string;
  center: string;
  dateInit: string;
  endDate: string;
  qualify?: string;
  comments?: string;
  link?: string;
}

enum StudiesType {
  All = "",
  Regular = "regular",
  Other = "other"
}

@Component({
  selector: "app-studies",
  templateUrl: "./studies.component.html",
  styleUrls: ["./studies.component.scss"]
})
export class StudiesComponent implements OnInit {
  public studies: TimeLineItem[];
  public filterStudies: TimeLineItem[];

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.invokeGetStudies();
  }

  private invokeGetStudies() {
    this.filesService.getLocalFile("assets/files/studies.json").subscribe(
      (studiesResponse: TimeLineItem[]) => {
        this.studies = studiesResponse;
        this.filter(StudiesType.All);
      },
      error => console.error("invokeGetStudies", error)
    );
  }

  public filter(filterValue: StudiesType) {
    if (filterValue === StudiesType.All) {
      this.filterStudies = this.studies;
    } else if (this.studies) {
      this.filterStudies = this.studies.filter(
        study => study.type === filterValue
      );
    }
  }
}
