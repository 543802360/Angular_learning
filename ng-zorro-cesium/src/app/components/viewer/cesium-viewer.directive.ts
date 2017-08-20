import { CesiumService } from "../../services/cesium/cesium.service";
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "qkEarthCesiumViewer"
})
export class CesiumViewerDirective implements OnInit {
  /**
   *
   * 输入属性。场景配置项
   * @type {*}
   * @memberof CesiumViewerDirective
   */
  @Input() options: any;
  public viewer: any;
  //注入ElementRef、CesiumService
  constructor(private el: ElementRef, private cesiumService: CesiumService) {
    //
    console.log("cesium-viewer.directive中的cesiumService:", cesiumService);
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.cesiumService.init(this.el.nativeElement, this.options);
    this.viewer = this.cesiumService.getViewer();
  }
}
