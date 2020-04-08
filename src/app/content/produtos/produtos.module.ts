import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosComponent } from './components/listar/produtos.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { RouterModule } from '@angular/router';
import { DetalharComponent } from './components/detalhar/detalhar.component';
import { LojinhasComponent } from '../lojinhas/components/listar/lojinhas.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [
        ProdutosComponent,
        FiltrosComponent,
        DetalharComponent,
        LojinhasComponent
    ],
    declarations: [
        ProdutosComponent,
        FiltrosComponent,
        DetalharComponent,
        LojinhasComponent
    ],
    providers: []
})
export class ProdutosModule {
    
}