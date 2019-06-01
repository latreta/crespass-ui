import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos/produtos.component';
import { LojinhasComponent } from './lojinhas/lojinhas.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { BemvindoComponent } from './bemvindo/bemvindo.component';

@NgModule({
    imports: [CommonModule],
    exports: [ProdutosComponent, LojinhasComponent, AjudaComponent, BemvindoComponent],
    declarations: [ProdutosComponent, LojinhasComponent, AjudaComponent, BemvindoComponent],
    providers: []
})
export class ContentModule {}