import { Component, OnInit } from "@angular/core";
// import { TimeLineItem } from "../../components/time-line/models/TimeLine";
interface TimeLineItem {
  id: number;
  name: string;
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

  constructor() {}

  ngOnInit() {
    this.studies = this.getStudies();
  }

  private getStudies(): TimeLineItem[] {
    let studies: TimeLineItem[] = [];
    studies.push(
      {
        id: 0,
        name: "web components",
        center: "youtube",
        dateInit: new Date().toISOString(),
        endDate: new Date().toISOString()
      },
      {
        id: 1,
        name: "web components",
        center: "youtube",
        dateInit: new Date().toISOString(),
        endDate: new Date().toISOString()
      }
    );
    return studies;
  }
}
