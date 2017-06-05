import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headerComponent} from './header.component';
import { FooterComponent} from './Footer.component';
import { ButtnComponent } from './buttn/buttn.component';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    FooterComponent,
    ButtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
