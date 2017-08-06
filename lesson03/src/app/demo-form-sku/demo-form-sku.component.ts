import { ObjectSchemaTreeNode } from "@ngtools/json-schema/src/schema-tree";
import { any } from "codelyzer/util/function";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "demo-form-sku",
  templateUrl: "./demo-form-sku.component.html",
  styleUrls: ["./demo-form-sku.component.css"]
})
export class DemoFormSkuComponent implements OnInit {
  //
  submitContent: Object[];
  submitted: boolean;

  constructor() {
    this.submitted = false;
    this.submitContent = [];
  }

  //提交表单
  onSubmit(form: object) {
    console.log("您提交的表单为：", form);
    this.submitContent.push(form);
    this.submitted = true;
  }
  //清除提交内容
  clearSubmitted() {
    this.submitContent.length = 0;
    this.submitted = false;
  }

  ngOnInit() {}
}
