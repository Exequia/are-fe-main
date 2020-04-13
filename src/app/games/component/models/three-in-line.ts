export interface GameConfig {
  playerX: Player;
  playerO: Player;
  status: GameStatus;
  round: GameRound;
  dashboard: GameDashboard;
  data: Array<Array<GameRound>>;
}

export interface Player {
  name: string;
  status: GameStatus;
}

export enum GameStatus {
  Waiting,
  Active,
  Finished,
  Tie,
}

export enum GameRound {
  Empty = "",
  X = "X",
  O = "O",
}

export interface GameDashboard {
  rows: number;
  cols: number;
}

export interface CellPosition {
  row: number;
  col: number;
}
