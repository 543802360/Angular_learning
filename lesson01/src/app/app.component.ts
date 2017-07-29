import undefined from './article/article.module';
import {Component} from '@angular/core';
import Article from './article/article.module';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  articles : Article[];
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('Google', 'http://www.google.com', 10),
      new Article('Alibaba', 'http://taobao.com', 10)
    ];
  }

  addArticle(title : HTMLInputElement, link : HTMLInputElement) {
    console.log(`添加文章标题为：${title.value}，添加文章链接为：${link.value}`);
    this
      .articles
      .unshift(new Article(title.value, link.value, 8));
    title.value = '';
    link.value = '';

    return false; //防止刷新
  }
  sortedArticles() : Article[] {
    return this
      .articles
      .sort((a : Article, b : Article) => {
        return b.votes - a.votes
      });
  }
}
