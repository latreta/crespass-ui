import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ProdutosModule } from './content/produtos/produtos.module';
import { BemVindoModule } from './content/bemvindo/bemvindo.module';
import { RouterModule } from '@angular/router';
import { SectionsModule } from './sections/sections.module';
import { PanelModule } from './panel/panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    ProdutosModule, 
    BemVindoModule,
    PanelModule,
    SectionsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
