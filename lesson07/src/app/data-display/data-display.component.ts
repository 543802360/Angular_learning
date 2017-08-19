import { Component, OnInit } from "@angular/core";
import { Player } from "../player";
@Component({
  selector: "app-data-display",
  templateUrl: "./data-display.component.html",
  styleUrls: ["./data-display.component.css"]
})
export class DataDisplayComponent implements OnInit {
  title = "NBA Players";
  players = [
    new Player("詹姆斯", "骑士队"),
    new Player("欧文", "骑士队"),
    new Player("韦德", "公牛队"),
    new Player("保罗", "火箭队")
  ];
  myFavorPlayer = this.players[0];
  constructor() {}

  ngOnInit() {}
}
