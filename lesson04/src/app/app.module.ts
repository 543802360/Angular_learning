import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SimpleHttpComponent } from "./simple-http/simple-http.component";

@NgModule({
  declarations: [AppComponent, SimpleHttpComponent],
  imports: [BrowserModule, HttpModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
