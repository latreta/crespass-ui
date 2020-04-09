import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosComponent } from './produtos/components/listar/produtos.component';
import { FiltrosComponent } from './produtos/components/filtros/filtros.component';
import { RouterModule } from '@angular/router';
import { LojinhasComponent } from './lojinhas/components/listar/lojinhas.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ProdutoDetalharComponent } from './produtos/components/produto-detalhar/produto-detalhar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [
        ProdutosComponent,
        ProdutoDetalharComponent,
        FiltrosComponent,
        LojinhasComponent,
        AjudaComponent
    ],
    declarations: [
        ProdutosComponent,
        ProdutoDetalharComponent,
        FiltrosComponent,
        LojinhasComponent,
        AjudaComponent
    ],
    providers: []
})
export class ContentModule {
    
}