import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sizer",
  templateUrl: "./sizer.component.html",
  styleUrls: ["./sizer.component.css"]
})
export class SizerComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChanged = new EventEmitter<number>();
  constructor() {}

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChanged.emit(this.size);
  }

  ngOnInit() {}
}
