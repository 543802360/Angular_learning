import { Directive, ElementRef, Renderer } from "@angular/core";

@Directive({
  selector: "[appMyDirective],appMyDirective"
})
export class MyDirectiveDirective {
  constructor(private _el: ElementRef, private _render: Renderer) {
    _render.setElementStyle(_el.nativeElement, "color", "green");
  }
}
