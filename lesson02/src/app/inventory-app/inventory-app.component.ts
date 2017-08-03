import { Component, OnInit } from "@angular/core";
import Product from "./product.module";
import { ProductListComponent } from "../product-list/product-list.component";
//组件注解
@Component({
  selector: "app-inventory-app",
  //templateUrl: "./inventory-app.component.html",
  template: `
  <div class="app-inventory-app">
    <product-list
      [productList]="products"
      (onProductSelected)="productWasSelected($event)">
    </product-list>
  </div>
  `,
  styleUrls: ["./inventory-app.component.css"]
})
export //组件定义类
class InventoryAppComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "Nike",
        "Nike Jordan",
        "/assets/images/products/black-shoes.jpg",
        ["Men", "shoes", "running shoes"],
        100.99
      ),
      new Product(
        "Hat",
        "A Nice Black Hat",
        "/assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        30.99
      ),
      new Product(
        "Jacket",
        "A Nice Blue Jacket",
        "/assets/images/products/blue-jacket.jpg",
        ["Women", "Apparel", "Jackets"],
        300
      )
    ];
  }
  productWasSelected(product: Product): void {
    console.log("Product Clicked:", product);
  }
  //组件初始化
  ngOnInit() {
    //do something when the inventory-app component is init
  }
}
