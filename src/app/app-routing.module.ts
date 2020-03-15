import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { BemvindoComponent } from './content/bemvindo/components/bemvindo.component';
import { BemVindoModule } from './content/bemvindo/bemvindo.module';
import { ProdutosComponent } from './content/produtos/components/listar/produtos.component';
import { ProdutosModule } from './content/produtos/produtos.module';
import { DetalharComponent } from './content/produtos/components/detalhar/detalhar.component';

const routes: Routes = [
  { path: '', component: BemvindoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/:id', component: DetalharComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HomeModule,
    BemVindoModule,
    ProdutosModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
