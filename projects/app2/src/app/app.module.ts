import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LibModule} from 'lib';
import {PageComponent} from '@components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
