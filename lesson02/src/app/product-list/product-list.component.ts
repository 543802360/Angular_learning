import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import Product from "../inventory-app/product.module";

@Component({
  selector: "product-list",
  inputs: ["productList"], //组件的输入参数，类似于函数的参数
  outputs: ["onProductSelected"], //组件输出事件
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  //输入参数，Input注解
  //@Input() productList: Product[];
  //组件接收参数
  productList: Product[];
  //组件输出事件。输出当前选中的产品
  onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product: Product) {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {}
}
