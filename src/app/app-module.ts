import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DatabindingComponent } from './databinding-component/databinding-component';
import { DirectiveSample } from './directive-sample/directive-sample';
import { FormsModule } from '@angular/forms';
import { Favs } from './custom/favs';
import { Pipesample } from './pipesample/pipesample';
import { MypipePipe } from './custom/mypipe-pipe';
import { Router, RouterModule } from '@angular/router';
import { Menu } from './menu/menu';



@NgModule({
  declarations: [
    App,
    DatabindingComponent,
    DirectiveSample,
    Menu,
    Favs,
    Pipesample,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
