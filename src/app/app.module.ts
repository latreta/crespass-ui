import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ContentModule } from './content/content.module';
import { BemVindoModule } from './content/bemvindo/bemvindo.module';
import { RouterModule } from '@angular/router';
import { SectionsModule } from './sections/sections.module';
import { PanelModule } from './panel/panel.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    SharedModule,
    ContentModule,
    BemVindoModule,
    PanelModule,
    SectionsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
