import { Component, OnInit, Input } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";
// import { TimeLineItem } from "./models/TimeLine";
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
  selector: "app-time-line",
  templateUrl: "./time-line.component.html",
  styleUrls: ["./time-line.component.scss"]
})
export class TimeLineComponent implements OnInit {
  @Input() items: TimeLineItem[];

  constructor() {}

  ngOnInit() {}
}
