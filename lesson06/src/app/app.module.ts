import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//组件
import { AppComponent } from "./app.component";
import { PlayersComponent } from "./nba/players/players.component";
import { PlayerListComponent } from "./nba/player-list/player-list.component";
//服务
import { PlayerService } from "../app/nba/services/player.service";

@NgModule({
  declarations: [AppComponent, PlayersComponent, PlayerListComponent],
  imports: [BrowserModule],
  providers: [{ provide: PlayerService, useClass: PlayerService }], //注册依赖提供商
  bootstrap: [AppComponent]
})
export class AppModule {}
