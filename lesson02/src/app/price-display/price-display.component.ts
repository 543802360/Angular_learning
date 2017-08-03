import { Component, OnInit } from "@angular/core";

@Component({
  selector: "price-display",
  inputs: ["price"],
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent implements OnInit {
  price: number;
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
