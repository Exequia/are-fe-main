import { Component, OnInit, Input } from '@angular/core';
import { Player, GameStatus } from '../models/three-in-line';

@Component({
  selector: 'app-three-player',
  templateUrl: './three-player.component.html',
  styleUrls: ['./three-player.component.scss']
})
export class ThreePlayerComponent implements OnInit {
  @Input() player!: Player;

  constructor() {}

  ngOnInit() {
    if (!this.player) {
      this.player = {
        name: `Jugador`,
        status: GameStatus.Waiting
      };
    }
  }

  /**
   * Check the status for return the class
   * @returns string class name for htmlelement
   */
  public getClass(): string {
    let className = 'inactive';

    if (this.player.status === GameStatus.Active) {
      className = 'active';
    }

    return className;
  }

  /**
   * Check the status of the player to know the translated
   * @retuns string with the translated text
   */
  public getStatusText(): string {
    let text = '';

    switch (this.player.status) {
      case GameStatus.Waiting:
        text = 'games.3x3.waiting';
        break;

      case GameStatus.Finished:
        text = 'games.3x3.finished';
        break;

      case GameStatus.Tie:
        text = 'games.3x3.tie';
        break;

      default:
        text = 'games.3x3.active';
        break;
    }

    return text;
  }
}
