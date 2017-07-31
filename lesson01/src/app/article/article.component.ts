/**
 * 文章组件
 */
import { Component, Input, OnInit } from "@angular/core";
import Article from "./article.module";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
  host: {
    class: "row"
  }
})
export class ArticleComponent implements OnInit {
  //参数输入注解
  @Input() article: Article;
  //public article : Article;

  constructor() {
    //this.article = new Article('Angular 2', 'http://angular.io', 10);
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {}
}
