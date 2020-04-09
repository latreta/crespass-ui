import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListarProdutosComponent } from './produtos/components/produto-listar/listar-produtos.component';
import { FiltrosComponent } from './produtos/components/filtros/filtros.component';
import { RouterModule } from '@angular/router';
import { LojinhasComponent } from './lojinhas/components/listar/lojinhas.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ViewProductComponent } from './produtos/components/view-product/view-product.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [
        ListarProdutosComponent,
        ViewProductComponent,
        FiltrosComponent,
        LojinhasComponent,
        AjudaComponent
    ],
    declarations: [
        ListarProdutosComponent,
        ViewProductComponent,
        FiltrosComponent,
        LojinhasComponent,
        AjudaComponent
    ],
    providers: []
})
export class ContentModule {
    
}