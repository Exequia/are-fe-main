import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GameRound, CellPosition, GameStatus } from "../models/three-in-line";
import { UtilsService } from "src/app/services/utils/utils.service";

@Component({
  selector: "app-three-dashboard",
  templateUrl: "./three-dashboard.component.html",
  styleUrls: ["./three-dashboard.component.scss"],
})
export class ThreeDashboardComponent implements OnInit {
  @Input() data: Array<Array<GameRound>>;
  @Input() currentRound: GameRound;
  @Input() status: GameStatus;
  @Output() cellSelected: EventEmitter<CellPosition> = new EventEmitter();

  constructor(private utils: UtilsService) {}

  ngOnInit() {}

  // /**
  //  * Check the Game status and return a class for the status
  //  * @returns string with classes for the status
  //  */
  // public getStatusClass(): string {
  //   return this.status === GameStatus.Finished ? "finished" : "dashboard";
  // }

  /**
   * Check the row and column selected and if the game is active and the cell is empty,
   * send data to the parent
   * @param row number
   * @param col number
   */
  public emitPosition(row: number, col: number) {
    if (
      this.status === GameStatus.Active &&
      this.data[row][col] === GameRound.Empty
    ) {
      this.cellSelected.emit({ row: row, col: col });
      const target: HTMLElement = document.querySelector(".col:hover");
      if (target) {
        target.blur();
      }
    }
  }

  /**
   * Check every cell and return a style for it's content value
   * @param content GameRound is the content of the cell
   * @returns string with the classes to set in the cell
   */
  public getCellClass(content: GameRound): string {
    let className = "hidden";

    if (this.status === GameStatus.Finished) {
      if (content === this.currentRound) {
        className = "bg-success";
      } else if (!content) {
        className = "finished-hidden";
      } else {
        className = "bg-danger";
      }
    } else if (this.status === GameStatus.Tie) {
      className = "bg-danger";
    } else if (content) {
      if (content === GameRound.X) {
        className = "text-danger";
      } else {
        className = "text-success";
      }
    }

    return className;
  }

  /**
   * Check de value of cell and return the icon fo that content
   * @param content GameRound is the value of the call
   * @returns string with the icon to render
   */
  public getIcon(content: GameRound): string {
    let icon = "far fa-circle";

    if (content) {
      if (content === GameRound.X) {
        icon = "fas fa-times";
      }
    }

    if (!content && this.currentRound === GameRound.X) {
      icon = "fas fa-times";
    }

    return `<i class="${icon}"></i>`;
  }

  /**
   * Check the device to set a correct class for app
   * @returns string classes to add at col
   */
  public getClass(): string {
    let classes = "col";

    if (!this.utils.isMobile()) {
      classes += " web";
    }

    if (this.status !== GameStatus.Active) {
      classes += " cursor-invalid";
    }

    return classes;
  }
}
