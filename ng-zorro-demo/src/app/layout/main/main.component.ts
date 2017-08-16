import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  isCollapsed = false;

  constructor() {}

  ngOnInit() {
    var map = L.map("map").setView([35.5, 110.5], 4);

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: false,
      maxZoom: 18
    }).addTo(map);
  }
}
