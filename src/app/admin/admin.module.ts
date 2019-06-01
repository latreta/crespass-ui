import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContaComponent } from './conta/conta.component';
import { FinancasComponent } from './financas/financas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ComprasComponent } from './compras/compras.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { VendasComponent } from './vendas/vendas.component';
import { PerguntasComponent } from './perguntas/perguntas.component';

@NgModule({
  declarations: [
    DashboardComponent, ContaComponent, FinancasComponent,
    FavoritosComponent, ComprasComponent, MensagensComponent,
    VendasComponent, PerguntasComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
