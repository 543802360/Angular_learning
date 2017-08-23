import { Component, OnInit } from "@angular/core";

@Component({
  selector: "qk-earth-draw",
  template: `
    <button nz-button [nzType]="'primary'">
      <span>点</span>
    </button>
    <button nz-button [nzType]="'dashed'">
      <span>线</span>
    </button>
    <button nz-button [nzType]="'danger'">
      <span>多边形</span>
    </button>
    <button nz-button [nzType]="'default'">
      <span>圆形</span>
    </button>
    <button nz-button [nzType]="'primary'" [nzGhost]="true">
       <span>矩形</span>
     </button>
  `,
  styleUrls: ["./draw.component.css"]
})
export class DrawComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
