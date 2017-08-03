import { ObjectSchemaTreeNode } from "@ngtools/json-schema/src/schema-tree";
import { any } from "codelyzer/util/function";
import { Component, OnInit } from "@angular/core";
import { element } from "protractor";

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

  onSubmit(form: object) {
    console.log("您提交的表单为：", form);
    this.submitContent.push(form);
    this.submitted = true;
  }

  ngOnInit() {}
}
