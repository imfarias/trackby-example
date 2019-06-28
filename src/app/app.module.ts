import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppListComponent} from "./list/list.component";
import {AppListTrackByComponent} from "./list-track-by/list-track-by.component";

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppListTrackByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
