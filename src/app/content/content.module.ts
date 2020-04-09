import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosComponent } from './produtos/components/listar/produtos.component';
import { FiltrosComponent } from './produtos/components/filtros/filtros.component';
import { RouterModule } from '@angular/router';
import { DetalharComponent } from './produtos/components/detalhar/detalhar.component';
import { LojinhasComponent } from './lojinhas/components/listar/lojinhas.component';
import { AjudaComponent } from './ajuda/ajuda.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [
        ProdutosComponent,
        FiltrosComponent,
        DetalharComponent,
        LojinhasComponent,
        AjudaComponent
    ],
    declarations: [
        ProdutosComponent,
        FiltrosComponent,
        DetalharComponent,
        LojinhasComponent,
        AjudaComponent
    ],
    providers: []
})
export class ContentModule {
    
}