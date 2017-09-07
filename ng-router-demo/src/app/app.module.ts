import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";

import { CrisislistComponent } from "./components/crisislist/crisislist.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HeroListComponent } from "./components/hero-list/hero-list.component";

const appRoutes: Routes = [
  {
    path: "crisis-center",
    component: CrisislistComponent
  },
  {
    path: "hero/:id",
    component: HeroDetailComponent
  },
  {
    path: "heroes",
    component: HeroListComponent,
    data: {
      title: "Heroes List"
    }
  },
  {
    path: "",
    redirectTo: "/heroes",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CrisislistComponent,
    HeroDetailComponent,
    PageNotFoundComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
