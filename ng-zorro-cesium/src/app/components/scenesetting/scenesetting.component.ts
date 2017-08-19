import { CesiumService } from "../../services/cesium/cesium.service";
import { Component, OnInit, AfterViewInit } from "@angular/core";
@Component({
  selector: "qk-earth-scenesetting",
  templateUrl: "./scenesetting.component.html",
  styleUrls: ["./scenesetting.component.css"]
})
export class ScenesettingComponent implements OnInit, AfterViewInit {
  viewer: any;
  constructor(private cesiumService: CesiumService) {}

  test() {
    console.log(this.viewer);
  }
  ngOnInit() {}

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.viewer = this.cesiumService.getViewer();
    console.log(this.viewer);
  }
}
