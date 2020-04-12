import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ContentModule } from './content/content.module';
import { BemvindoComponent } from './content/bemvindo/components/bemvindo.component';
import { BemVindoModule } from './content/bemvindo/bemvindo.module';
import { LojinhasComponent } from './content/lojinhas/components/listar/lojinhas.component';
import { AjudaComponent } from './content/ajuda/ajuda.component';

import { ListarProdutosComponent } from './content/produtos/components/produto-listar/listar-produtos.component';
import { ViewProductComponent } from './content/produtos/components/view-product/view-product.component';

const routes: Routes = [
  { path: '', component: BemvindoComponent },
  { path: 'lojas', component: LojinhasComponent },
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'produtos/:id', component: ViewProductComponent},
  { path: 'ajuda', component: AjudaComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HomeModule,
    BemVindoModule,
    ContentModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
