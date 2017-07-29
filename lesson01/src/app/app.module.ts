/**
 * NgModule；Angular应用引导模块
 * 1、declaration：该模块中定义的组件
 * 2、imports：该模块的依赖模块
 * 3、bootstrap：该模块引导应用时的顶层组件
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';

@NgModule({
  declarations: [
    AppComponent, ArticleComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
