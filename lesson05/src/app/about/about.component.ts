import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = "我是关于我";
  }

  ngOnInit() {}
}
