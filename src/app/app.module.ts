import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentSectionComponent} from './content-section/content-section.component';
import {FooterComponent} from './footer/footer.component';
import {SwitchUserInfoDirective} from "./directives/switch-user-info.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentSectionComponent,
    FooterComponent,
    SwitchUserInfoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
