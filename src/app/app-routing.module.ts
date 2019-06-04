import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BemvindoComponent } from './content/bemvindo/components/bemvindo.component';
import { BemVindoModule } from './content/bemvindo/bemvindo.module';

const routes: Routes = [
  { path: '', component: BemvindoComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HomeModule,
    BemVindoModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
