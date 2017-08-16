import { Player } from "../player";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"]
})
export class PlayerListComponent implements OnInit {
  @Input() private players: Player[];

  constructor() {}

  ngOnInit() {}
}
