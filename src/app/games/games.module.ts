import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { GamesRoutingModule } from "./games-routing.module";

import { GamesHomeComponent } from "./views/games-home/games-home.component";
import { ThreeInLineComponent } from './views/three-in-line/three-in-line.component';
import { ThreeDashboardComponent } from './component/three-dashboard/three-dashboard.component';
import { ThreePlayerComponent } from './component/three-player/three-player.component';
import { ThreeInLineGameComponent } from './component/three-in-line-game/three-in-line-game.component';
import { CardComponent } from './component/card/card.component';
import { CardListComponent } from './component/card-list/card-list.component';

@NgModule({
  declarations: [GamesHomeComponent, ThreeInLineComponent, ThreeDashboardComponent, ThreePlayerComponent, ThreeInLineGameComponent, CardComponent, CardListComponent],
  imports: [CommonModule, SharedModule, GamesRoutingModule],
})
export class GamesModule {}
