import { Component, OnInit } from "@angular/core";
import {
  GameConfig,
  Player,
  GameStatus,
  GameRound,
  GameDashboard,
  CellPosition,
} from "../models/three-in-line";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-three-in-line-game",
  templateUrl: "./three-in-line-game.component.html",
  styleUrls: ["./three-in-line-game.component.scss"],
})
export class ThreeInLineGameComponent implements OnInit {
  public game: GameConfig;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.resetGame();
  }

  private resetGame() {
    this.game = this.getGameConfig();
    this.initGame();
  }

  private getGameConfig(): GameConfig {
    return {
      playerX: this.getDefaultPlayer(GameRound.X),
      playerO: this.getDefaultPlayer(GameRound.O),
      status: GameStatus.Waiting,
      round: GameRound.X,
      dashboard: this.getDefaultDashboard(),
      data: null,
    };
  }

  private getDefaultPlayer(alias: GameRound): Player {
    return {
      name: `Jugador ${alias}`,
      status: GameStatus.Waiting,
    };
  }

  private getDefaultDashboard(): GameDashboard {
    return {
      rows: 3,
      cols: 3,
    };
  }

  private initGame() {
    this.game.data = this.initGameData();
  }

  private initGameData(): Array<Array<GameRound>> {
    let data: Array<Array<GameRound>> = [[]];
    for (let i = 0; i < this.game.dashboard.rows; i++) {
      const row: GameRound[] = [];
      for (let col = 0; col < this.game.dashboard.rows; col++) {
        row.push(GameRound.Empty);
      }
      data.push(row);
    }
    data = data.slice(1);
    return data;
  }

  public changeRound() {
    if (this.game.round === GameRound.X) {
      this.game.round = GameRound.O;
      this.game.playerX.status = GameStatus.Waiting;
      this.game.playerO.status = GameStatus.Active;
    } else {
      this.game.round = GameRound.X;
      this.game.playerX.status = GameStatus.Active;
      this.game.playerO.status = GameStatus.Waiting;
    }
  }

  public getCellSelected(selectedCell: CellPosition) {
    this.game.data[selectedCell.row][selectedCell.col] = this.game.round;

    const status = this.checkContinueGame(selectedCell);
    switch (status) {
      case GameStatus.Finished:
        this.finishGame(GameStatus.Finished);
        break;

      case GameStatus.Tie:
        this.finishGame(GameStatus.Tie);
        break;

      default:
        this.changeRound();
        break;
    }
  }

  private checkContinueGame(selectedCell: CellPosition): GameStatus {
    let status = GameStatus.Active;

    if (this.checkWiner(selectedCell)) {
      status = GameStatus.Finished;
    }

    if (status === GameStatus.Active && this.checkTie()) {
      status = GameStatus.Tie;
    }

    return status;
  }

  private checkWiner(selectedCell: CellPosition): boolean {
    let valid = true;

    valid = this.checkHorizontals(selectedCell);

    if (!valid) {
      valid = this.checkVerticals(selectedCell);
    }

    if (!valid) {
      valid = this.checkDiagonals(selectedCell);
    }

    return valid;
  }

  private checkHorizontals(selectedCell: CellPosition): boolean {
    const row = this.game.data[selectedCell.row];
    return this.checkValues(row);
  }

  private checkValues(values: GameRound[]): boolean {
    let finished = false;

    finished =
      values[0] !== "" && values[0] === values[1] && values[1] === values[2];

    return finished;
  }

  private checkVerticals(selectedCell: CellPosition): boolean {
    const cols: GameRound[] = [this.game.data[0][selectedCell.col]];
    cols.push(this.game.data[1][selectedCell.col]);
    cols.push(this.game.data[2][selectedCell.col]);
    return this.checkValues(cols);
  }

  private checkDiagonals(selectedCell: CellPosition): boolean {
    let valid = false;
    let values: GameRound[];

    if (selectedCell.row === 0) {
      if (selectedCell.col === 0) {
        values = [this.game.data[0][0]];
        values.push(this.game.data[1][1]);
        values.push(this.game.data[2][2]);
        valid = this.checkValues(values);
      } else if (selectedCell.col === 2) {
        values = [this.game.data[0][2]];
        values.push(this.game.data[1][1]);
        values.push(this.game.data[2][0]);
        valid = this.checkValues(values);
      }
    } else if (selectedCell.row === 1 && selectedCell.col === 1) {
      values = [this.game.data[0][0]];
      values.push(this.game.data[1][1]);
      values.push(this.game.data[2][2]);
      valid = this.checkValues(values);

      if (!valid) {
        values = [this.game.data[0][2]];
        values.push(this.game.data[1][1]);
        values.push(this.game.data[2][0]);
        valid = this.checkValues(values);
      }
    } else if (selectedCell.row === 2) {
      if (selectedCell.col === 0) {
        values = [this.game.data[0][2]];
        values.push(this.game.data[1][1]);
        values.push(this.game.data[2][0]);
        valid = this.checkValues(values);
      } else if (selectedCell.col === 2) {
        values = [this.game.data[0][0]];
        values.push(this.game.data[1][1]);
        values.push(this.game.data[2][2]);
        valid = this.checkValues(values);
      }
    }

    return valid;
  }

  private checkTie(): boolean {
    let tie = true;

    let emptyCell = this.game.data[0].find((cell) => cell === GameRound.Empty);

    if (emptyCell === GameRound.Empty) {
      tie = false;
    } else {
      emptyCell = this.game.data[1].find((cell) => cell === GameRound.Empty);
    }

    if (tie) {
      if (emptyCell === GameRound.Empty) {
        tie = false;
      } else {
        emptyCell = this.game.data[2].find((cell) => cell === GameRound.Empty);
      }
    }

    return tie && emptyCell === undefined;
  }

  private finishGame(status: GameStatus) {
    this.game.status = status;
    this.game.playerX.status = status;
    this.game.playerO.status = status;
  }

  public checkFinishStatus(): boolean {
    return (
      this.game.status === GameStatus.Finished ||
      this.game.status === GameStatus.Tie
    );
  }

  public getFinishedText(): string {
    let text = "";

    switch (this.game.status) {
      case GameStatus.Tie:
        text = this.translate.instant("games.3x3.tie");
        break;

      case GameStatus.Finished:
        text = this.translate.instant("games.3x3.finished", {
          winner: this.game.round,
        });
        break;
    }
    return text;
  }
}
