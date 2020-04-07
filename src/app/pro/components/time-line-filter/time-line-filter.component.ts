import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { FilterButtons } from "./models/filters";

export interface FilterButtons {
  value: string;
  items: number;
}

@Component({
  selector: "app-time-line-filter",
  templateUrl: "./time-line-filter.component.html",
  styleUrls: ["./time-line-filter.component.scss"],
})
export class TimeLineFilterComponent implements OnInit {
  /** Array with the full data of component */
  @Input() items: any[];

  /** String to filter items. It should to be a node of item structure */
  @Input() filterProp: string;

  /** Return an array of filtered items */
  @Output() filteredItems: EventEmitter<any[]> = new EventEmitter();

  /** String array to display buttons colecctions to filter on html */
  public filterButtons: FilterButtons[];

  constructor() {}

  ngOnInit() {
    this.filterButtons = this.getFilterButtons();
  }

  /**
   * Check the items array to set the buttons to filter the data
   *
   * @returns FilterButtons[] with first item to all
   */
  private getFilterButtons(): FilterButtons[] {
    if (this.items) {
      let filterButtons: FilterButtons[] = [
        {
          value: "",
          items: this.items.length,
        },
      ];

      if (this.items) {
        const values: string[] = [];

        this.items.forEach((option) => {
          if (values.indexOf(option[this.filterProp]) === -1) {
            values.push(option[this.filterProp]);
          }
        });
        const itemValues = values.map<FilterButtons>((val: string) => {
          return { value: val, items: 0 };
        });
        filterButtons = this.getFiltersItems(filterButtons.concat(itemValues));
      }

      return filterButtons;
    }
  }

  /**
   * Search the number item for
   *
   * @param filterButtons
   */
  private getFiltersItems(filterButtons: FilterButtons[]): FilterButtons[] {
    filterButtons.forEach((option, index, array) => {
      if (option.value === "") {
        option.items = this.items.length;
      } else {
        const filtered = this.items.filter(
          (item) => item[this.filterProp] === option.value
        );
        option.items = filtered.length;
      }
    });
    return filterButtons;
  }

  /**
   * Filter default items array by the filter node defined in input filterProp, and value defined in the string of method param
   *
   * @param filterValue string
   * @return filteredItems any[]
   */
  public filter(filterValue: string) {
    let filteredItems: any[] = this.items;

    if (this.items && filterValue) {
      filteredItems = this.items.filter(
        (study) => study[this.filterProp] === filterValue
      );
    }

    this.filteredItems.emit(filteredItems);
  }
}
