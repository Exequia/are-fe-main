import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-time-line-list",
  templateUrl: "./time-line-list.component.html",
  styleUrls: ["./time-line-list.component.scss"]
})
export class TimeLineListComponent implements OnInit {
  @Input() items: any[];
  @Input() filterProp: string;
  public filteredItems: any[];

  constructor() {}

  ngOnInit() {
    this.filteredItems = this.items;
  }

  public doFilteredItems(filterResults: any[]) {
    this.filteredItems = filterResults;
  }
}
