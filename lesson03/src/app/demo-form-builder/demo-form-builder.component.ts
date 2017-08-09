import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
@Component({
  selector: "demo-form-builder",
  templateUrl: "./demo-form-builder.component.html",
  styleUrls: ["./demo-form-builder.component.css"]
})
export class DemoFormBuilderComponent implements OnInit {
  //类变量
  public myForm: FormGroup;
  public submitted: boolean;
  public submitContent: object[];
  public name: AbstractControl;
  public age: AbstractControl;
  public sex: AbstractControl;

  public inputName: string;
  public inputAge: number;
  public inputSex: string;
  /**
   * Creates an instance of DemoFormBuilderComponent.
   * 理解依赖注入。Angular会注入一个从FormBuilder类创建的对象实例，并把它赋值给了fb变量
   * 此时的参数fb，与name:string不同，此处的fb是依赖注入，相当于new Formbuilder。这样理解不知道对不对，后面详细学习依赖注入再来修改
   * @param {FormBuilder} fb
   * @memberof DemoFormBuilderComponent
   */
  constructor(public fb: FormBuilder) {
    this.myForm = fb.group({
      name: ["", Validators.required],
      age: [, Validators.required],
      sex: ["", Validators.required]
    });
    //添加formControl类实例属性
    this.name = this.myForm.controls["name"];
    this.age = this.myForm.controls["age"];
    this.sex = this.myForm.controls["sex"];
    //添加监听。subscribe相当于AddEventListener
    this.name.valueChanges.subscribe((name: string) => {
      this.inputName = `您输入的姓名为：${name}`;
      console.log(this.inputName);
    });
    this.age.valueChanges.subscribe((age: number) => {
      this.inputName = `您输入的年龄为：${age}`;
      console.log(this.inputAge);
    });
    this.submitContent = [];
    this.submitted = false;
  }

  onSubmit(value: object) {
    console.log(value);
    //console.log(`you submit value : ${value}`);
    this.submitContent.push(value);
    this.submitted = true;
  }
  //清除提交内容
  clearSubmitted() {
    this.submitContent.length = 0;
    this.submitted = false;
  }

  ngOnInit() {}
}
