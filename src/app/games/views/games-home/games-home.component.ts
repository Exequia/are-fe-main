import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/services/files/files.service';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.scss']
})
export class GamesHomeComponent implements OnInit {
  public loadingGames = false;
  public gamesIds: string[] = [];

  constructor(private filesService: FilesService) {}

  ngOnInit() {
    this.invokeGetGames();
  }

  /**
   * Read the file game.json data
   */
  private invokeGetGames() {
    this.loadingGames = true;
    this.filesService.getLocalFile('assets/files/games.json').subscribe(
      (gamesIdsResponse: string[]) => {
        this.loadingGames = false;
        this.gamesIds = gamesIdsResponse;
      },
      (error) => {
        this.loadingGames = false;
        console.error('invokeGetGames', error);
      }
    );
  }
}
