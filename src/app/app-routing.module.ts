import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BemvindoComponent } from './content/bemvindo/bemvindo.component';
import { ProdutosComponent } from './content/produtos/produtos.component';
import { AjudaComponent } from './content/ajuda/ajuda.component';
import { ContentModule } from './content/content.module';
import { LojinhasComponent } from './content/lojinhas/lojinhas.component';

const routes: Routes = [
  { path: '', component: BemvindoComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'lojas', component: LojinhasComponent },
  { path: 'ajuda', component: AjudaComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
