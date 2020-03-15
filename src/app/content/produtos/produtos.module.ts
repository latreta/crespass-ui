import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosComponent } from './components/listar/produtos.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { RouterModule } from '@angular/router';
import { DetalharComponent } from './components/detalhar/detalhar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [
        ProdutosComponent,
        FiltrosComponent,
        DetalharComponent
    ],
    declarations: [
        ProdutosComponent,
        FiltrosComponent,
        DetalharComponent
    ],
    providers: []
})
export class ProdutosModule {
    
}