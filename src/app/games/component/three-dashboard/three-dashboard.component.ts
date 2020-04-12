import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GameRound, CellPosition, GameStatus } from "../models/three-in-line";

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

  constructor() {}

  ngOnInit() {}

  public getStatusClass(): string {
    return this.status === GameStatus.Finished ? "finished" : "dashboard";
  }

  public emitPosition(row: number, col: number) {
    if (this.status !== GameStatus.Finished) {
      this.cellSelected.emit({ row: row, col: col });
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
        cl = "red";
      } else {
        cl = "green";
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
}
