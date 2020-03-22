import { Component, OnInit, Input } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { TimeLineItem } from "./models/TimeLine";

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
