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

  public getStatusClass(): string {
    return this.status === GameStatus.Finished ? "finished" : "dashboard";
  }

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

  public getStyle(content: GameRound): string {
    let cl = "hidden";

    if (this.status === GameStatus.Finished) {
      if (content === this.currentRound) {
        cl = "bg-success";
      } else if (!content) {
        cl = "finished-hidden";
      } else {
        cl = "bg-danger";
      }
    } else if (this.status === GameStatus.Tie) {
      cl = "bg-danger";
    } else if (content) {
      if (content === GameRound.X) {
        cl = "text-danger";
      } else {
        cl = "text-success";
      }
    }

    return cl;
  }

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
