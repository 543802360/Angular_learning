import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

import { AppRoutingModule } from "./app-routing.module";
import { HeroesModule } from "./heroes/heroes.module";
import { CrisisCenterModule } from "./crisis-center/crisis-center.module";
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';

//导入组件

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ComposeMessageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CrisisCenterModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ], //注意路由模块的先后顺序
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
