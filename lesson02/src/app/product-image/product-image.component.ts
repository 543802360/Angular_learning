import { Component, OnInit } from "@angular/core";
import Product from "../inventory-app/product.module";

@Component({
  selector: "product-image",
  host: { class: "ui small image" },
  inputs: ["product"],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {
  product: Product;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
