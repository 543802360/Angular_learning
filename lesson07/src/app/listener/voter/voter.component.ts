import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-voter",
  templateUrl: "./voter.component.html",
  styleUrls: ["./voter.component.css"]
})
export class VoterComponent implements OnInit {
  //属性输入
  @Input() name: string;
  //组件输出事件
  @Output() onVoted: EventEmitter<boolean>;

  voted: boolean;
  constructor() {
    this.onVoted = new EventEmitter<boolean>();
    this.voted = false;
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
  ngOnInit() {}
}
