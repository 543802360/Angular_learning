import { Component, OnInit } from "@angular/core";
import Product from "../inventory-app/product.module";

@Component({
  selector: "product-department",
  inputs: ["product"],
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})
export class ProductDepartmentComponent implements OnInit {
  product: Product;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
