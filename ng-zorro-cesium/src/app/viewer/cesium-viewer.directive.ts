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
  @Input() options: any;
  public viewer: any;
  //注入ElementRef依赖
  constructor(private el: ElementRef) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = new Cesium.Rectangle.fromDegrees(
      75.0,
      -30.0,
      130.0,
      90.0
    );
    Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;
    this.viewer = new Cesium.Viewer(this.el.nativeElement, this.options);
  }
}
