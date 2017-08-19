import { Component, OnInit } from "@angular/core";
import { VoterComponent } from "../voter/voter.component";
@Component({
  selector: "app-votetaker",
  templateUrl: "./votetaker.component.html",
  styleUrls: ["./votetaker.component.css"]
})
export class VotetakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ["Mr. IQ", "Ms. Universe", "Bombasto"];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor() {}

  ngOnInit() {}
}
