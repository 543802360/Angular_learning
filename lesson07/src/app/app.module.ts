import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SizerComponent } from "./databind/sizer/sizer.component";
import { DataDisplayComponent } from "./data-display/data-display.component";
import { VoterComponent } from "./listener/voter/voter.component";
import { VotetakerComponent } from "./listener/votetaker/votetaker.component";

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    DataDisplayComponent,
    VoterComponent,
    VotetakerComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
