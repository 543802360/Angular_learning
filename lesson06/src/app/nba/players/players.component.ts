import { PlayerService } from "../services/player.service";
import { Player } from "../player";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"]
})
export class PlayersComponent implements OnInit {
  players: Player[];
  //最简单的依赖注入（无参）
  constructor(private playerService: PlayerService) {
    this.players = playerService.getPlayers();
  }

  ngOnInit() {}
}
