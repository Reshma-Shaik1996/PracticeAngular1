import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DatabindingComponent } from './databinding-component/databinding-component';
import { DirectiveSample } from './directive-sample/directive-sample';
import { FormsModule } from '@angular/forms';
import { Favs } from './custom/favs';

@NgModule({
  declarations: [
    App,
    DatabindingComponent,
    DirectiveSample,
    Favs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
