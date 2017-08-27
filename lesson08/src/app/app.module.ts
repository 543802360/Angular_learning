import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MyDirectiveDirective } from "./components/my-directive.directive";
import { FirstDirectiveDirective } from './components/first-directive.directive';

@NgModule({
  declarations: [AppComponent, MyDirectiveDirective, FirstDirectiveDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
